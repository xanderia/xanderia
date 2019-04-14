
const encoding				= require("../xata/encoding");
const log					= require("../xata/log");
const uuid					= require("uuid/v4");
const fetch					= require("node-fetch");
const moment				= require("moment");
const functions 			= require('firebase-functions');
const firebaseAdmin			= require('firebase-admin');

const crc32					= require("buffer-crc32");
const crypto				= require("crypto");

const firebaseCredentials	= require("../xanderia-e7b8f-firebase-adminsdk-nhxqs-d7c63cc86d.json");
const paypalCredentials		= require("../paypal-credentials.json");



module.exports = functions.https.onRequest(async (request, response) => {
	let f = "functions.paypalWebhooks";

	let logPayload = {						// TODO This pattern should be used across all functions: (1) Define a log payload upfront. (2) In below's source code, add to 'logPayload'. (3) Regardless of early function termination, log what's in the 'logPayload'.
		query:				request.query,
		protocol:			request.protocol,
		headers:			request.headers,
		headersRaw:			JSON.stringify(request.headers),
		ip:					request.ip,
		hostname:			request.hostname,
		body:				request.body,
		bodyRaw:			Buffer.from(request.rawBody).toString('ascii'),
		// webhookId:
		verificationStatus:	'unverified'
	};

	

	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
		const db = firebaseAdmin.firestore();
		log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });
	}


	// TODO look for Webhook ID in DB
	// NOTE		Works!
	// db.collection('people').doc("alexgrafe83").get()
	// .then((doc) => {
	// 	if (doc.exists) {
	// 		console.log(f, doc.id, '=>', doc.data());
	// 		response.send(f + JSON.stringify(doc.data()));
	// 	}
	// 	else {
	// 		console.log(f, "doc does not exist");
	// 		response.send(f + JSON.stringify(doc.data()));
	// 	}
	// 	return (data);
	// })
	// .catch((error) => {
	// 	console.log(f, 'Error getting documents', error);
	// 	response.send(f + 'ERROR');


	// HEADERS example (Webhooks Simulator)
	// {
	// 	"host": "us-central1-xanderia-e7b8f.cloudfunctions.net",
	// 	"user-agent": "PayPal/AUHD-214.0-51787073",
	// 	"transfer-encoding": "chunked",
	// 	"accept": "*/*",
	// 	"cache-control": "no-cache, no-store",
	// 	"cdn-loop": "Fastly",
	// 	"content-type": "application/json",
	// 	"correlation-id": "30efdeb037e68",
	// 	"fastly-client-ip": "173.0.81.33",
	// 	"fastly-ff": "s48hDkrIORDrAz3sjuyh5gIWcInqIjSROZ47KAY+w/I=!PAO!cache-pao17438-PAO",
	// 	"fastly-ssl": "1",
	// 	"fastly-temp-xff": "173.0.81.33, 173.0.81.33",
	// 	"function-execution-id": "fiegitdc67v0",
	// 	"paypal-auth-algo": "SHA256withRSA",
	// 	"paypal-auth-version": "v2",
	// 	"paypal-cert-url": "https://api.paypal.com/v1/notifications/certs/CERT-360caa42-fca2a594-8079afec",
	// 	"paypal-transmission-id": "31139350-596b-11e9-a98a-1514fab7e077",
	// 	"paypal-transmission-sig": "kDwqwLY6RzwAJf10Qwdk7GESbSEP6MdTAnp9Dt/o0vQz+babKzCwmrfi/H0l8G1K9fyWBrZ0MdKDNjskZreysQsobh4PiZ9cgPC+ZodezByQMeRi3wQ/Cj/rokuX2AYlCLeVXh/+okXxfwxVxoCm7ZFPC2E3Mj0fSe0J3iRwezdH2eEy4kONm9VbAW/PAckfIIlLkw7IqxR97gIVMO1B5YAHnEiGZdeLRFeeepjDvmI7PAtw347KfkUMEI+1MPyj/mXYXhgB6Ui4bjfZ5C3lYB3YLs5XverW2jNcaLp4EYgSl+Wl/Qv3mKiR3YRQ2hVq2SXnrHhoX+OTGR14DrbV1g==",
	// 	"paypal-transmission-time": "2019-04-07T19:27:33Z",
	// 	"pragma": "no-cache",
	// 	"x-appengine-api-ticket": "2fda24dbc64add9c",
	// 	"x-appengine-city": "?",
	// 	"x-appengine-citylatlong": "0.000000,0.000000",
	// 	"x-appengine-country": "US",
	// 	"x-appengine-default-version-hostname": "t4d475e595d7c2a21-tp.appspot.com",
	// 	"x-appengine-https": "on",
	// 	"x-appengine-region": "?",
	// 	"x-appengine-request-log-id": "5caa4f2b00ff00ff07210289067a0001737e74346434373565353935643763326132312d7470000166653236366536666366376133323532306438613839363434646461333331323a3100010101",
	// 	"x-appengine-user-ip": "35.188.21.62",
	// 	"x-cloud-trace-context": "213d680b845728ba43a75165a41c94a0/7674350125493898109;o=1",
	// 	"x-forwarded-for": "35.188.21.62",
	// 	"x-forwarded-host": "xanderia.one",
	// 	"x-forwarded-proto": "https",
	// 	"x-forwarded-server": "cache-pao17438-PAO",
	// 	"x-forwarded-url": "/webhooks/paypal",
	// 	"x-nginx-proxy": "true",
	// 	"x-real-ip": "157.52.76.38",
	// 	"x-timer": "S1554665259.916604,VS0",
	// 	"x-varnish": "2579369374",
	// 	"accept-encoding": "gzip"
	// }
	// raw Body
	// {"id":"WH-50R7428051403842W-0PJ14460PF4449425","event_version":"1.0","create_time":"2019-04-06T18:53:28.074Z","resource_type":"capture","resource_version":"2.0","event_type":"PAYMENT.CAPTURE.COMPLETED","summary":"Payment completed for EUR 0.01 EUR","resource":{"id":"2SL91519719136804","amount":{"currency_code":"EUR","value":"0.01"},"final_capture":true,"seller_protection":{"status":"NOT_ELIGIBLE"},"disbursement_mode":"INSTANT","seller_receivable_breakdown":{"gross_amount":{"currency_code":"EUR","value":"0.01"},"paypal_fee":{"currency_code":"EUR","value":"0.01"},"net_amount":{"currency_code":"EUR","value":"0.00"}},"status":"COMPLETED","create_time":"2019-04-06T18:53:22Z","update_time":"2019-04-06T18:53:22Z","links":[{"href":"https://api.paypal.com/v2/payments/captures/2SL91519719136804","rel":"self","method":"GET"},{"href":"https://api.paypal.com/v2/payments/captures/2SL91519719136804/refund","rel":"refund","method":"POST"},{"href":"https://api.paypal.com/v2/checkout/orders/5VP80671WW592730F","rel":"up","method":"GET"}]},"links":[{"href":"https://api.paypal.com/v1/notifications/webhooks-events/WH-50R7428051403842W-0PJ14460PF4449425","rel":"self","method":"GET"},{"href":"https://api.paypal.com/v1/notifications/webhooks-events/WH-50R7428051403842W-0PJ14460PF4449425/resend","rel":"resend","method":"POST"}]}


	// eligibility checks
	// TODO Later, refactor the below as a xata function. Combine approach with OpenAPI 3.0 - do not attempt to build something alone. Also, combine with overall eligibility check approach.
	// TODO items.value already references the values but they could not exist and would throw an error. Check 'request.headers.hasOwnProperty['paypal-cert-url'] before invoking it.

	// console.log("BEFORE CHECKS\n", {prot: request.protocol, headers: request.headers, body: Buffer.from(request.rawBody).toString('ascii')});


	let checks = {
		metadata: {
			numberOfChecks:				12,
			numberOfSuccessfulChecks:	0,
			numberOfFailedChecks:		0
		},
		verification: {
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


	// TODO cache certs
	// expected: 239fa510-5c68-11e9-8340-299168e1093a|2019-04-11T14:43:15Z|WH-4PK571362W464073U-5K82050656165125A|4123572221
	let expectedSignature = request.headers["paypal-transmission-id"] + "|" + request.headers["paypal-transmission-time"] + "|" + paypalCredentials.webhookCreationId + "|" + crc32.unsigned(Buffer.from(request.rawBody))
	let paypalCertFetchResult = await fetch(request.headers["paypal-cert-url"]);
	let paypalCertFetchBuffer = await paypalCertFetchResult.buffer();

	checks.verification.paypalCertText = paypalCertFetchBuffer.toString();
	checks.verification.expectedSignature = expectedSignature;


	try {
    	let cryptoResult = crypto.createVerify('sha256WithRSAEncryption').update(expectedSignature).verify(paypalCertFetchBuffer, request.headers["paypal-transmission-sig"], 'base64');
		checks.verification.cryptoResultType = typeof cryptoResult;
		checks.verification.hashAlgo = 'sha256WithRSAEncryption';
		checks.verification.expectedSignature = expectedSignature;
		checks.verification.transmissionSignature = request.headers["paypal-transmission-sig"];
		checks.verification.cryptoResultJSON = JSON.stringify(cryptoResult);
	}
	catch (error) {
		checks.verification.error = error.message;
	}

	/*

	var expectedSignature = headers['PAYPAL-TRANSMISSION-ID'] + "|" + headers['PAYPAL-TRANSMISSION-TIME'] + "|" + webhookId + "|" + crc32.unsigned(body);
    response = verifyPayload(cert, expectedSignature, headers['PAYPAL-TRANSMISSION-SIG'], headers['PAYPAL-AUTH-ALGO']);

	function verifyPayload(key, msg, hash, hashAlgo) {
        hashAlgo = hashAlgo || 'sha256WithRSAEncryption';

        return crypto.createVerify(hashAlgo)
            .update(msg)
            .verify(key, hash, 'base64');
    }

	*/


	logPayload.checks = checks;

	console.log("functions.webhooksPayPal", JSON.stringify(logPayload));

	let logs = await log.add({
		data:		logPayload,
		severity:	1,
		origin:		'paypal.webhook',
		location:	f,
		apps:		['shop-playground'],
		services:	['paypal']
	});

	// response
	// .status(204)
	// .append("X-Xanderia-Log-Output", "after logs: " + JSON.stringify(logs))
	// // .append("X-Xanderia-Log-Event-Id", logs.eventId)
	// // .append("X-Xanderia-Log-Universal-Id", logs.universalEventId)
	// // .append("X-Xanderia-Log-View", "https://xanderia.one/logs/" + logs.eventId)
	// .end();

	console.log(f, "logs result:", logs);


	// TODO check logically
	// request.headers["paypal-transmission-time"] is within the last hour. 2019-04-06T18:53:28Z

	// TODO retrieve cert from Firebase

	// TODO Verify actual signature.
	// var expectedSignature = headers['PAYPAL-TRANSMISSION-ID'] + "|" + headers['PAYPAL-TRANSMISSION-TIME'] + "|" + webhookId + "|" + crc32.unsigned(body);
	// response = verifyPayload(cert, expectedSignature, headers['PAYPAL-TRANSMISSION-SIG'], headers['PAYPAL-AUTH-ALGO']);
	// function   verifyPayload(key,  msg,               hash,                               hashAlgo) {
    //     hashAlgo = hashAlgo || 'sha256WithRSAEncryption';
	//
    //     return crypto.createVerify(hashAlgo)
    //         .update(msg)
    //         .verify(key, hash, 'base64');
    // }

	// TODO save webhook id (or idempotency ID) and look for it




	// TODO store into firestore (but strip of injection attacks (via reg-exp) and too sensitive data)

	response
	.status(200)
	.append("X-Xanderia-Log-Event-Id", logs.eventId)
	.append("X-Xanderia-Log-Universal-Id", logs.universalEventId)
	.append("X-Xanderia-Log-View", "https://xanderia.one/logs/" + logs.eventId)
	.end();
});
