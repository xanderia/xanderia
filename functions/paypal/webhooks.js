
const encoding				= require("../xata/encoding");
const log					= require("../xata/log");
const uuid					= require("uuid/v4");
const fetch					= require("node-fetch");
const moment				= require("moment");
const functions 			= require('firebase-functions');
const firebaseAdmin			= require('firebase-admin');

const webhookVerification	= require("./webhookVerification");

const firebaseCredentials	= require("../config/xanderia-e7b8f-firebase-adminsdk-nhxqs-d7c63cc86d.json");
const paypalCredentials		= require("../config/paypal-credentials.json");



module.exports = functions.https.onRequest(async (request, response) => {
	let f = "functions.paypalWebhooks";

	let headersRaw = JSON.stringify(request.headers);

	let logPayload = {
		severity:				3,
		origin:					'paypal.webhook',
		location:				f,
		apps:					['shop-playground'],
		services:				['paypal'],
		data: {
			query:				request.query,
			protocol:			request.protocol,
			headers:			request.headers,
			headersRaw:			headersRaw,
			ip:					request.headers["fastly-client-ip"],
			body:				request.body,
			bodyRaw:			request.rawBody.toString()
		}
	};

	// TODO Accept `request.query.test-call=true` to use in PayPal webhooks simulator or in Insomnia to not fail tests on HTTP(S) and Transmission Time but also do store/log that it's a test.



	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
	}
	const db = firebaseAdmin.firestore();
	log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });



	// TODO Later, look up PayPal account from Webhook and retrieve Webhook Creation ID
	// or let each user append an ID, i.e. `https://xanderia.one/webhooks/paypal?paypalWebhookXanderiaId=...` or use the user's Payer ID but this would not be unique across several Webhook Registrations from the same PayPal account.

	// eligibility checks
	// TODO Later, refactor the below as a xata function. Combine approach with OpenAPI 3.0 - do not attempt to build something alone. Also, combine with overall eligibility check approach.
	// TODO items.value already references the values but they could not exist and would throw an error. Check 'request.headers.hasOwnProperty['paypal-cert-url'] before invoking it.



	let checks = {
		metadata: {
			numberOfChecks:				12,
			numberOfSuccessfulChecks:	0,
			numberOfFailedChecks:		0
		},
		verification: {
			transmissionTimeSensible: 	moment.utc(request.headers["paypal-transmission-time"]).isSameOrAfter(moment.utc().subtract(7, "days")),	// Transmission Time within last 7 days ?
			certificateVerification: {}
		},
		items: [
			{name: 'request.protocol',								value: request.protocol,								regexp: '^https$',														match: false,	valueExample: 'https'},
			{name: 'request.headers["content-type"]',				value: request.headers["content-type"],					regexp: '^application\/json$',											match: false,	valueExample: 'application/json'},
			{name: 'request.headers["correlation-id"]',				value: request.headers["correlation-id"],				regexp: '^[0-9a-z]{13}$',												match: false,	valueExample: '30efdeb037e68'},
			{name: 'request.headers["fastly-client-ip"]',			value: request.headers["fastly-client-ip"],				regexp: '^(66\.211\.170\.66|173\.0\.81\.1|173\.0\.81\.33|173.0.81.[0-9]{1,3})$',	match: false,	valueExample: '173.0.81.33'},	// https://www.paypal.com/nc/smarthelp/article/what-are-the-ip-addresses-for-live-paypal-servers-ts1056 66.211.170.66 173.0.81.1 173.0.81.33 173.0.81.0 - 173.0.81.255
			{name: 'request.headers["paypal-auth-algo"]',			value: request.headers["paypal-auth-algo"],				regexp: '^SHA256withRSA$',												match: false,	valueExample: 'SHA256withRSA'},
			{name: 'request.headers["paypal-auth-version"]',		value: request.headers["paypal-auth-version"],			regexp: '^v2$',															match: false,	valueExample: 'v2'},
			{name: 'request.headers["paypal-cert-url"]',			value: request.headers["paypal-cert-url"],				regexp: '^https:\/\/(?:[a-z\.-]*\.)?paypal\.com\/.+$',					match: false,	valueExample: 'https://api.paypal.com/v1/notifications/certs/CERT-360caa42-fca2a594-8079afec'},
			{name: 'request.headers["paypal-transmission-id"]',		value: request.headers["paypal-transmission-id"],		regexp: '^[0-9a-z-]{36}$',												match: false,	valueExample: '43d1e650-589d-11e9-9197-9f995c1285cf'},
			{name: 'request.headers["paypal-transmission-time"]',	value: request.headers["paypal-transmission-time"],		regexp: '^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z$',		match: false,	valueExample: '2019-04-06T18:53:28Z'},
			{name: 'request.headers["paypal-transmission-sig"]',	value: request.headers["paypal-transmission-sig"],		regexp: '^[0-9a-zA-Z\/\+=]+$',											match: false,	valueExample: 'kDwqwLY6RzwAJf10Qwdk7GESbSEP6MdTAnp9Dt/o0vQz+babKzCwmrfi/H0l8G1K9fyWBrZ0MdKDNjskZreysQsobh4PiZ9cgPC+ZodezByQMeRi3wQ/Cj/rokuX2AYlCLeVXh/+okXxfwxVxoCm7ZFPC2E3Mj0fSe0J3iRwezdH2eEy4kONm9VbAW/PAckfIIlLkw7IqxR97gIVMO1B5YAHnEiGZdeLRFeeepjDvmI7PAtw347KfkUMEI+1MPyj/mXYXhgB6Ui4bjfZ5C3lYB3YLs5XverW2jNcaLp4EYgSl+Wl/Qv3mKiR3YRQ2hVq2SXnrHhoX+OTGR14DrbV1g=='},

			{name: 'request.body.id',								value: request.body.id,									regexp: '^WH-[A-Z0-9]{17}-[A-Z0-9]{17}$',								match: false,	valueExample: 'WH-50R7428051403842W-0PJ14460PF4449425'},
			{name: 'request.body.event_type',						value: request.body.event_type,							regexp: '^[A-Z][A-Z\.]+[A-Z]$',											match: false,	valueExample: 'PAYMENT.CAPTURE.COMPLETED'},
		]
	};

	for (const i in checks.items) {
		if (typeof checks.items[i].value === 'string' && RegExp(checks.items[i].regexp).test(checks.items[i].value)) {
			checks.items[i].match = true;
			checks.metadata.numberOfSuccessfulChecks++;
		} else {
			checks.items[i].match = false;
			checks.metadata.numberOfFailedChecks++;
		}
	}



	// Lookup cert in db
	let certDocResult = await db.collection("paypal.webhook-certificates").doc( encoding.ASCIItoBase64(request.headers["paypal-cert-url"]) ).get();
	let certDoc = {};
	let certText = "";
	let certBuffer = null;
	let storeCertPromise = null;
	let momentNow = moment.utc();

	if (certDocResult.exists) {
		certDoc = certDocResult.data();
		certText = certDoc.certText;
		certBuffer = Buffer.from(certText);
		// console.log(f + ": certDoc exists\n", JSON.stringify(certDoc, null, 2));

		storeCertPromise = db.collection("paypal.webhook-certificates").doc(encoding.ASCIItoBase64(request.headers["paypal-cert-url"])).update({ timeUsed: { milliseconds: momentNow.valueOf(), utc: momentNow.toISOString(), firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentNow.toDate()) } });
	} else {
		// console.log(f + ": certDoc does NOT exist");

		let certFetchResult = await fetch(request.headers["paypal-cert-url"]);
		certBuffer = await certFetchResult.buffer();
		certText = certBuffer.toString();

		storeCertPromise = db.collection("paypal.webhook-certificates").doc(encoding.ASCIItoBase64(request.headers["paypal-cert-url"])).set({
			certText: certText,
			certUrl: request.headers["paypal-cert-url"],
			timeUsed: { milliseconds: momentNow.valueOf(), utc: momentNow.toISOString(), firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentNow.toDate()) }
		});
	}



	// verification
	try {
		checks.verification.certificateVerification = await webhookVerification({
			transmissionId:		request.headers["paypal-transmission-id"],
			transmissionTime:	request.headers["paypal-transmission-time"],
			transmissionSig:	request.headers["paypal-transmission-sig"],
			authAlgo:			request.headers["paypal-auth-algo"],
			authVersion:		request.headers["paypal-auth-version"],
			rawBody:			request.rawBody,
			webhookCreationId:	paypalCredentials.webhookCreationId,
			certBuffer:			certBuffer
		});
	}
	catch (error) {
		checks.verification.certificateVerification = error;

		logPayload.severity = 7;
	}



	logPayload.data.checks = checks;

	let logs = await log.add(logPayload);
	// console.log(f + ": log result:", logs);


	let storeWebhookPromise = db.collection("paypal.webhooks").doc(request.body.id).set({
		body: request.body,
		bodyRaw: request.rawBody.toString(),
		headersRaw: headersRaw,
		timeReceived: { milliseconds: momentNow.valueOf(), utc: momentNow.toISOString(), firebase: firebaseAdmin.firestore.Timestamp.fromDate(momentNow.toDate()) }
	});



	await Promise.all([storeCertPromise, storeWebhookPromise]);

	response
	.status(200)
	.append("X-Xanderia-Log-Event-Id", logs.eventId)
	.append("X-Xanderia-Log-Universal-Id", logs.universalEventId)
	.append("X-Xanderia-Log-View", "https://xanderia.one/logs/" + logs.eventId)
	.end();
});
