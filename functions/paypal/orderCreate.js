
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



module.exports = functions.https.onRequest((request, response) => {
	let f = "functions.paypalOrderCreate";
	let uuid4 = uuid();

	

	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
		const db = firebaseAdmin.firestore();
		log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });
	}

	accessTokenFirstParty({clientId: paypalCredentials.clientId, clientSecret: paypalCredentials.clientSecret, merchantId: paypalCredentials.merchantId, firebaseAdmin: firebaseAdmin})
	.then(x => {
		console.log(f, "access token", x.access_token);

		return fetch('https://api.paypal.com/v2/checkout/orders', {
			method:									"POST",
			cache:									"no-cache",
			headers: {
				"Content-Type":						"application/json",
				"Accept":							"application/json",
				"Prefer":							"return=representation", // NOTE or "minimal"
				"Authorization":					"Bearer " + x.access_token,
				"PayPal-Partner-Attribution-Id":	"ALEX_TESTING",
				"PayPal-Request-Id":				uuid4,
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
					"locale":						"nl-NL",		// ATTENTION has to be in xx-YY form, not xx_YY
					"landing_page":					"LOGIN",
					"shipping_preference":			"NO_SHIPPING",	// NOTE or GET_FROM_FILE (default) or SET_PROVIDED_ADDRESS
					"user_action":					"PAY_NOW",		// NOTE or CONTINUE
					"payment_method": {
						"payer_selected":			"PAYPAL",
						"payee_preferred":			"UNRESTRICTED"	// NOTE or IMMEDIATE_PAYMENT_REQUIRED
					}
				},

				// "return_url":						"",
				// "cancel_url":						""
			})
		})
		.then(r => r.json())
		.then(r => {
			console.log(f, 'fetch successful', r);
			return r;
		})
		.then(r => response.status(200).send({id: r.id}))
		.catch(e => {
			console.error(f, 'fetch failed', e);
			response.status(500).send(e.message);
		});
	})
	.catch(e => {
		console.error(f, 'access token retrieval failed', e.message);
		response.status(500).send('UCC failed: ' + e.message);
	});
});
