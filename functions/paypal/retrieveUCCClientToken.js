
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

	// setup
	let f							= "functions.paypalUCCClientToken",
	paypalRequestId					= uuid(),
	momentStart						= false,
	momentEnd						= false,
	paypalAccessTokenResult			= false,
	paypalUCCClientTokenAPIData		= {},
	paypalUCCClientTokenRequestObj	= false,
	paypalUCCClientTokenResult		= false,
	paypalUCCClientTokenJSONResult	= false,
	logResult						= false,
	logData = {
		data:						{paypalUCCClientTokenAPIData},
		origin:						'paypal.ucc-client-token',
		location:					f,
		services:					['paypal'],
		apps:						['shop-playground'],	// TODO has to be injected from parent thread after switching from HTTP trigger to DB.onWrite trigger through a TaskRequest object
		// universalEvents: 		[...]					// TODO has to be injected from parent thread after switching from HTTP trigger to DB.onWrite trigger through a TaskRequest object
	};



	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
		const db = firebaseAdmin.firestore();
		log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });
	}



	// retrieve access token
	try { paypalAccessTokenResult = await accessTokenFirstParty({clientId: paypalCredentials.clientId, clientSecret: paypalCredentials.clientSecret, merchantId: paypalCredentials.merchantId, firebaseAdmin: firebaseAdmin}); }
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



	// retrieve client token
	paypalUCCClientTokenRequestObj = new fetch.Request('https://api.paypal.com/v1/identity/generate-token', {
		method:									"POST",
		cache:									"no-cache",
		headers: {
			"Content-Type":						"application/json",
			"Accept":							"application/json",
			"Authorization":					"Bearer " + paypalAccessTokenResult.access_token,
			"PayPal-Partner-Attribution-Id":	"ALEX_TESTING",
			"PayPal-Request-Id":				paypalRequestId,
			"PayPal-Auth-Assertion":			(encoding.ASCIItoBase64('{"alg": "none"}') + '.' + encoding.ASCIItoBase64('{"iss": "' + paypalCredentials.clientId + '", "payer_id": "' + paypalCredentials.merchantId + '"}') + '.')
		},
		body: JSON.stringify({
			"buyer_id":							"alexgrafe1983de"
		})
	});

	try {
		paypalUCCClientTokenAPIData.request = {
			method: 	paypalUCCClientTokenRequestObj.method,
			url:		paypalUCCClientTokenRequestObj.url,
			headers:	JSON.stringify(paypalUCCClientTokenRequestObj.headers.raw()),
			body:		paypalUCCClientTokenRequestObj.body
		};

		momentStart = moment();
		paypalUCCClientTokenAPIData.timing = {
			start:	{milliseconds: momentStart.valueOf(),	iso: momentStart.toISOString(),		firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentStart.toDate()) }
		};
		paypalUCCClientTokenResult = await fetch(paypalUCCClientTokenRequestObj);
		momentEnd = moment();

		paypalUCCClientTokenJSONResult = await paypalUCCClientTokenResult.json();

		paypalUCCClientTokenAPIData.response = {
			headers:	JSON.stringify(paypalUCCClientTokenResult.headers.raw()),
			body:		JSON.stringify(paypalUCCClientTokenJSONResult)
		};
		paypalUCCClientTokenAPIData.timing.duration	= { milliseconds: momentEnd.diff(momentStart),	iso: moment.duration(momentEnd.diff(momentStart)).toISOString(),	seconds: String(momentEnd.diff(momentStart, 'seconds', true)) };
		paypalUCCClientTokenAPIData.timing.end		= { milliseconds: momentEnd.valueOf(),			iso: momentEnd.toISOString(),										firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentEnd.toDate()) };
	}
	catch (error) {
		logData.data.error = error.message;
		logData.severity = 7;

		logResult = await log.add(logData);

		response.status(500)
		.append("X-Xanderia-Log-Output",		f + ": UCC Client Token retrieval failed: " + error)
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
	.append("X-Xanderia-Log-Output",		f + ": PayPal UCC Client Token successfully retrieved.")
	.append("X-Xanderia-Log-Event-Id",		logResult.eventId)
	.append("X-Xanderia-Log-Universal-Id",	logResult.universalEventId)
	.append("X-Xanderia-Log-View",			"https://xanderia.one/logs/" + logResult.eventId)
	.send({client_token: paypalUCCClientTokenJSONResult.client_token});
});
