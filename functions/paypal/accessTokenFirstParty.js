

const encoding = require("../xata/encoding");
const log = require("../xata/log");
const uuid = require("uuid/v4");
const fetch = require("node-fetch");
const moment = require("moment");



const accessTokenFirstParty = (_) => {
	return new Promise (async (resolve, reject) => {
		let f				= 'paypalAccessTokenFirstParty',
		apiResponse			= {},
		paypalRequestId		= uuid(),
		logResult			= false,
		fetchData = {
			requestObj		: {},
			result			: false,
			resultJSON		: false,
			momentStart		: false,
			momentEnd		: false,
		},
		logPayload = {
			data:			{ apiLog: {request: {}, response: {}, timing: {} } },
			origin:			'paypal.access-token',
			location:		f,
			services:		['paypal'],
			apps:			['shop-playground'],
			// universalEvents: [...]
		};



		// retrieve access token
		fetchData.requestObj = new fetch.Request('https://api.paypal.com/v1/oauth2/token', {
			method:						"POST",
			cache:						"no-cache",
			headers: {
				"Content-Type":			"application/json",
				"Accept":				"application/json",
				// "PayPal-Partner-Attribution-Id":	"ALEX_TESTING",	// NOTE BN-Code not required for access token retrieval since it's independant from any financial activity.
				"PayPal-Request-Id":	paypalRequestId,
				"Authorization":		"Basic " + encoding.ASCIItoBase64(_.clientId + ':' + _.clientSecret)
			},
			body:						"grant_type=client_credentials&response_type=token&return_authn_schemes=true"
		});

		// TODO look for fresh Access Token in DB first
		// TODO store Access Token (incl. validity) in DB

		try {
			logPayload.data.apiLog.request = {
				method:		fetchData.requestObj.method,
				url:		fetchData.requestObj.url,
				headers:	JSON.stringify(fetchData.requestObj.headers.raw()),
				body:		fetchData.requestObj.body
			};

			fetchData.momentStart = moment();
			logPayload.data.apiLog.timing.start = {milliseconds: fetchData.momentStart.valueOf(),	iso: fetchData.momentStart.toISOString(),		firebase: _.firebaseAdmin.firestore.Timestamp.fromDate(fetchData.momentStart.toDate()) };

			fetchData.result = await fetch(fetchData.requestObj);

			fetchData.momentEnd = moment();

			fetchData.resultJSON = await fetchData.result.json();

			logPayload.data.apiLog.response = {
				headers:	JSON.stringify(fetchData.result.headers.raw()),
				body:		JSON.stringify(fetchData.resultJSON)
			};

			logPayload.data.apiLog.timing.duration	= { milliseconds: fetchData.momentEnd.diff(fetchData.momentStart),	iso: moment.duration(fetchData.momentEnd.diff(fetchData.momentStart)).toISOString(),	seconds: String(fetchData.momentEnd.diff(fetchData.momentStart, 'seconds', true)) };
			logPayload.data.apiLog.timing.end		= { milliseconds: fetchData.momentEnd.valueOf(),					iso: fetchData.momentEnd.toISOString(),													firebase: _.firebaseAdmin.firestore.Timestamp.fromDate(fetchData.momentEnd.toDate()) };
		}
		catch (error) {
			logPayload.data.error = error.message;
			logPayload.severity = 7;

			logResult = await log.add(logPayload);

			reject(new Error("Retrieving PayPal Access Token failed: " + error.message));
		}


		// finalize
		logPayload.severity = 4;
		logResult = await log.add(logPayload);
		resolve(fetchData.resultJSON);
	});
};


module.exports = accessTokenFirstParty;
