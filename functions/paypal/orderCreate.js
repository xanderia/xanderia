
const encoding			= require("../xata/encoding");
const log				= require("../xata/log");
const uuid				= require("uuid/v4");
const fetch				= require("node-fetch");
const moment			= require("moment");
const functions 		= require('firebase-functions');
const firebaseAdmin		= require('firebase-admin');
const accessTokenFirstParty = require("./accessTokenFirstParty");

var firebaseCredentials	= require("../xanderia-e7b8f-firebase-adminsdk-nhxqs-d7c63cc86d.json");
const paypalCredentials	= require("../paypal-credentials.json");



module.exports = functions.https.onRequest(async (request, response) => {
	let f								= "functions.paypalOrderCreate";
	let momentStart						= false;
	let momentEnd						= false;
	let paypalRequestId					= uuid();
	let paypalAccessTokenResult			= false;
	let logResult						= false;
	let paypalOrderCreateAPIData		= {};
	let paypalOrderCreateRequestObj		= false;
	let paypalOrderCreateResult			= false;
	let paypalOrderCreateJSONResult		= false;
	let logData = {
		data:							{paypalOrderCreateAPIData},
		origin:							'paypal.order-create',
		location:						f,
		services:						['paypal'],
		apps:							['shop-playground'],	// TODO has to be injected from parent thread after switching from HTTP trigger to DB.onWrite trigger through a TaskRequest object
		// universalEvents: 			[...]					// TODO has to be injected from parent thread after switching from HTTP trigger to DB.onWrite trigger through a TaskRequest object
	};


	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
		const db = firebaseAdmin.firestore();
		log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });
	}


	// retrieve access token
	try { paypalAccessTokenResult = await accessTokenFirstParty({clientId: paypalCredentials.clientId, clientSecret: paypalCredentials.clientSecret, merchantId: paypalCredentials.merchantId, firebaseAdmin: firebaseAdmin}) }
	catch (error) {
		logData.data.error = error;
		logData.severity = 7;

		console.log(logData);

		let logResult = await log.add(logData);

		response.status(500)
		.append("X-Xanderia-Log-Output",		f + ": Access Token retrieval failed: " + error)
		.append("X-Xanderia-Log-Event-Id",		logResult.eventId)
		.append("X-Xanderia-Log-Universal-Id",	logResult.universalEventId)
		.append("X-Xanderia-Log-View",			"https://xanderia.one/logs/" + logResult.eventId)
		.end();
	}



	// create order
	paypalOrderCreateRequestObj = new fetch.Request('https://api.paypal.com/v2/checkout/orders', {
		method:									"POST",
		cache:									"no-cache",
		headers: {
			"Content-Type":						"application/json",
			"Accept":							"application/json",
			"Prefer":							"return=representation", // NOTE or "minimal"
			"Authorization":					"Bearer " + paypalAccessTokenResult.access_token,
			"PayPal-Partner-Attribution-Id":	"ALEX_TESTING",
			"PayPal-Request-Id":				paypalRequestId,
			"PayPal-Auth-Assertion":			(encoding.ASCIItoBase64('{"alg": "none"}') + '.' + encoding.ASCIItoBase64('{"iss": "' + paypalCredentials.clientId + '", "payer_id": "' + paypalCredentials.merchantId + '"}') + '.')
		},
		body: JSON.stringify({					// https://developer.paypal.com/docs/api/orders/v2/
			"intent":							"CAPTURE",
			//"payer": {
			// 	"address": {
			//
			// 	}
			// }
			"purchase_units": [
				{
					"amount": {
						"value":				"0.01",
						"currency_code":		"EUR"
					},
					"soft_descriptor":			"Xanderia"
					// payee - payee: { email_address: 'payee@gmail.com' }
					// amount_with_breakdown
					// amount_breakdown
				}
			],
			"application_context": {
				"brand_name":					"Xanderia",
				"locale":						"en-DE",		// ATTENTION has to be in xx-YY form, not xx_YY
				"landing_page":					"LOGIN",
				"shipping_preference":			"NO_SHIPPING",	// NOTE or GET_FROM_FILE (default) or SET_PROVIDED_ADDRESS
				"user_action":					"PAY_NOW",		// NOTE or CONTINUE
				"payment_method": {
					"payer_selected":			"PAYPAL",		// VALUES or CREDIT, ... SEPA? IDEAL? BANCONTACT? P24?
					"payee_preferred":			"UNRESTRICTED"	// NOTE or IMMEDIATE_PAYMENT_REQUIRED
				},
				"return_url":					"https://www.example.org/paypal",	// NOTE On dev_.paypal.com: https://xanderia.one/shop-playground?origin=paypal-checkout-return
				"cancel_url":					"https://www.example.org/paypal?error=customer-cancel" // NOTE Do _not_ url-encode this, e.g. error%3Dcancel. Simply use the plain form.
			}

		})
	});

	try {
		paypalOrderCreateAPIData.request = {
			method: 	paypalOrderCreateRequestObj.method,
			url:		paypalOrderCreateRequestObj.url,
			headers:	JSON.stringify(paypalOrderCreateRequestObj.headers.raw()),
			body:		paypalOrderCreateRequestObj.body
		};

		momentStart = moment();
		paypalOrderCreateAPIData.timing = {
			start:	{milliseconds: momentStart.valueOf(),	iso: momentStart.toISOString(),		firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentStart.toDate()) }
		};
		paypalOrderCreateResult = await fetch(paypalOrderCreateRequestObj);
		momentEnd = moment();

		paypalOrderCreateJSONResult = await paypalOrderCreateResult.json();

		paypalOrderCreateAPIData.response = {
			headers:	JSON.stringify(paypalOrderCreateResult.headers.raw()),
			body:		JSON.stringify(paypalOrderCreateJSONResult)
		};
		paypalOrderCreateAPIData.timing.duration	= { milliseconds: momentEnd.diff(momentStart),	iso: moment.duration(momentEnd.diff(momentStart)).toISOString(),	seconds: String(momentEnd.diff(momentStart, 'seconds', true)) };
		paypalOrderCreateAPIData.timing.end			= { milliseconds: momentEnd.valueOf(),			iso: momentEnd.toISOString(),										firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentEnd.toDate()) };
	}
	catch (error) {
		logData.data.error = error.message;
		logData.severity = 7;

		logResult = await log.add(logData);

		response.status(500)
		.append("X-Xanderia-Log-Output",		f + ": Creating an Order failed: " + error)
		.append("X-Xanderia-Log-Event-Id",		logResult.eventId)
		.append("X-Xanderia-Log-Universal-Id",	logResult.universalEventId)
		.append("X-Xanderia-Log-View",			"https://xanderia.one/logs/" + logResult.eventId)
		.end();
	}



	// finalize
	logData.severity = 4;
	// console.log(logData);
	logResult = await log.add(logData);
	response.status(200)
	.append("X-Xanderia-Log-Output",		f + ": PayPal Order successfully created.")
	.append("X-Xanderia-Log-Event-Id",		logResult.eventId)
	.append("X-Xanderia-Log-Universal-Id",	logResult.universalEventId)
	.append("X-Xanderia-Log-View",			"https://xanderia.one/logs/" + logResult.eventId)
	.send({id: paypalOrderCreateJSONResult.id});	// NOTE Returning `Order ID` which is also the `Token`
});
