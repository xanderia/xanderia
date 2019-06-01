"use strict";

const functions 			= require("firebase-functions");
const firebaseAdmin			= require("firebase-admin");
const moment				= require("moment");
const fetch					= require("node-fetch");
const queryString			= require("query-string");

const time					= require("../xata/time");
const authGoogle			= require("../xata/authGoogle");
const functionsHelper		= require("../xata/functionsHelper");
const log					= require("../xata/log");
const security				= require("../xata/security");
const encoding				= require("../xata/encoding");

const firebaseCredentials	= require("../config/xanderia-e7b8f-firebase-adminsdk-nhxqs-d7c63cc86d.json");
const googleCredentials		= require("../config/google-credentials.js");



// 🆃🅾🅳🅾 1  index.html has to immediately establish contact to Firebase and create a session object based on the
// 🆃🅾🅳🅾 2a Add ACTION: Login.Google.Start that creates CSRF Token and Nonce in session and then redirects to /login/google/start.
// 🆃🅾🅳🅾 2b Accepts parameter `request.query.sessionID`
// 🆃🅾🅳🅾 3  Below HTTP function then checks for these values in the session.
// 🆃🅾🅳🅾 4  /login/google/finish function then retrieves `sessionID` from `state` in Google's redirect and looks up whether CSRF Token and Nonce are as expected and continues.
// 🅴🆇🅰🅼🅿🅻🅴 users.sessions 1V3DsuxDArc51plJ4OSM data.auth.google



// NAME		authGoogleStart
// URL		/login/google/start
// PARAMS	request.query.sessionIDs
// RETURN	Redirects to Google Auth page

// TODO		Add timing
// TODO		Store csrfToken + nonce to session
// TODO		Look at current `db::user.session` doc to see what exactly to do here + what the context is, e.g. first-time login vs upgrade + `login_hint` + `prompt=select_account` for example
// TODO		Retrieve URL dynamically from Discovery Document (https://accounts.google.com/.well-known/openid-configuration)
// TODO		access_type=offline only on first login, not later - for example not for an upgrade
// TODO		Add "login_hint": "alex.grafe@xanderia.one"

exports.googleFlowStart = functions.https.onRequest(async (request, response) => {

	let $ = {
		name:					"functionsWeb.auth.googleFlowStart",
		input: {
			// TODO Put this in the session.
			// config: {
			// 	redirect:		(((typeof request.query.redirect === "string") && (request.query.redirect === "false")) ? false : true),
			// 	windowType:		(((typeof request.query.windowType === "string") && (request.query.windowType === "popup")) ? "popup" : "redirect")
			// }
		},
		output: {
		},
		data: {
			csrfToken:			security.createCSRFToken(),
			nonce:				security.createNonce(),
			flowUrl:			"https://accounts.google.com/o/oauth2/v2/auth",
			queryObj:			{}
		},
		timing: {
		}
	};

	$.data.queryObj = {
		client_id:		googleCredentials.clientId,
		response_type:	"code",
		scope:			"openid email profile",
		redirect_uri:	"https://xanderia.one/login/google/finish",
		state:			"csrfToken=" + $.data.csrfToken,
		nonce:			$.data.nonce,
		hd:				"*",
		access_type:	"offline"
	};
	$.data.flowUrl += "?" + queryString.stringify($.data.queryObj);

	// TODO Log this
	// if (! firebaseAdmin.apps.length) {
	// 	firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
		// log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });
	// }
	// const db = firebaseAdmin.firestore();

	console.log($);

	if ($.input.config.redirect) {
		response.redirect($.data.flowUrl);
	} else {
		response.status(200).append("Content-Type", "text/html").send("<html><body><a href=\"" + $.data.flowUrl + "\">" + $.data.flowUrl + "</a></body></html>");
		// .append("X-Xanderia-Log-Event-Id", logs.eventId) // .append("X-Xanderia-Log-Universal-Id", logs.universalEventId) // .append("X-Xanderia-Log-View", "https://xanderia.one/logs/" + logs.eventId)
	}
});







// 🆃🅾🅳🅾 Look up in session: route + nonce + csrfToken
// 🆃🅾🅳🅾 Overhaul to do this in the background and then send back to the client via Firebase. Don't let the user wait.
// 🆃🅾🅳🅾 `f.functionRequest` reworked to xata library

exports.googleFlowFinish = functions.https.onRequest(async (request, response) => {

	let $ = {
		name:					"functionsWeb.auth.googleFlowFinish",

		config:	{
		},

		input: {
		},

		output: {

		},

		data: {
			googleLoginFinish:	{}
		},

		timing: {
			all: {
				start:			null,
				end:			null,
				duration:		null
			}
		}
	};


	$.data.googleLoginFinish = await authGoogle.loginFinish({

	});

});

/*
exports.googleFlowFinish = functions.https.onRequest(async (request, response) => {
	let f = {																// Unification with log data. Only mask certain things from the log later on or think of some way of marking it `masked`.
		name:								"functions.authGoogleFinish",
		services:							["auth"],
		apps:								["shop-playground"],
		severity:							4,
		timing: {
			all: {
				start:						time.objFromMoment(moment.utc()),
				end:						false,
				duration:					0
			},
			googleRefreshToken: {}
		},
		data: {
			error:							false,
			http: {
				request: {
					query:					request.query,
					headers:				request.headers
				},
				response: {
					status:					302,
					url:					"https://xanderia.one/shop-playground"
				}
			},
			apiCalls: {
				googleRefreshToken: {
					request: {
						url:				"https://www.googleapis.com/oauth2/v4/token",
						method:				"POST",
						headers: {
											"Content-Type":	"application/x-www-form-urlencoded",
											"Accept":		"application/json"
						},
						body:				queryString.stringify({
							code:			request.query.code,
							client_id:		googleCredentials.clientId,
							client_secret:	googleCredentials.clientSecret,
							grant_type:		"authorization_code",
							redirect_uri:	"https://xanderia.one/login/google/finish"
											})
					},
					response: {
						headers: {},
						body: {}
					}
				}
			}
		}
	};
	let logResult;



	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
	}
	const db = firebaseAdmin.firestore();
	log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });



	try {
		f.timing.googleRefreshToken.start = time.objFromMoment(moment.utc());
		console.log(JSON.stringify(f));
		console.log("URL: " + f.data.apiCalls.googleRefreshToken.request.url);

		let apiResult = await fetch(f.data.apiCalls.googleRefreshToken.request.url, {
			method:		f.data.apiCalls.googleRefreshToken.request.method,
			headers:	f.data.apiCalls.googleRefreshToken.request.headers,
			body:		f.data.apiCalls.googleRefreshToken.request.body,
			cache:		"no-cache"
		});

		f.timing.googleRefreshToken.end = time.objFromMoment(moment.utc());
		f.timing.googleRefreshToken.duration = time.durationFromMoments(moment.utc(f.timing.googleRefreshToken.start.utc), moment.utc(f.timing.googleRefreshToken.end.utc));

		f.data.apiCalls.googleRefreshToken.response.body = await apiResult.json();
		f.data.apiCalls.googleRefreshToken.response.body.id_token_decoded = security.decodeIdToken(f.data.apiCalls.googleRefreshToken.response.body.id_token);
		f.data.apiCalls.googleRefreshToken.response.bodyRaw = JSON.stringify(f.data.apiCalls.googleRefreshToken.response.body);
		f.data.apiCalls.googleRefreshToken.response.headers = JSON.stringify(apiResult.headers.raw());



		if (f.data.apiCalls.googleRefreshToken.response.body.error === "invalid_grant") {
			throw new Error("Invalid Auth Code. Google OAuth API returned: error:invalid_grant");
		}
	}
	catch (error) {
		f.data.apiCalls.googleRefreshToken.error = error.message;
		f.data.error = "fetch Google Refresh Token failed: " + error.message;
		f.severity = 7;
		console.log(JSON.stringify(f));
	}

	f.timing.all.end = time.objFromMoment(moment.utc());
	f.timing.all.duration = time.durationFromMoments(moment.utc(f.timing.all.start.utc), moment.utc(f.timing.all.end.utc));

	logResult = await log.add(f);

	response.redirect(f.data.http.response.url);
});
*/


/*
exports.googleAccessToken = functions.https.onRequest((request, response) => {

	let $ = {
		name:						"functions.web.auth.googleAccessToken",
		input:						functionsHelper.inputFromRequest(request),
		output:	{
			headers: {
				"Content-Type":		"text/plain",
			},

			timing:					{ all: {}, authGoogleAccessTokenFromRefreshToken: {} }
		},
		data: {
			authGoogleAccessTokenFromRefreshToken:	{},
			moments: {
				all: {
					start:			moment.utc(),
					end:			null
				}
			}
		}
	};

	$.output.timing.all.start = time.objFromMoment($.data.moments.all.start);



	$.data.authGoogleAccessTokenFromRefreshToken = authGoogle.accessTokenFromRefreshToken({});


	$.data.moments.all.end = moment.utc();
	$.output.timing.all.end = time.objFromMoment($.data.moments.all.end);
	$.output.timing.all.duration = time.durationFromMoments($.data.moments.all.start, $.data.moments.all.end);

	$.output.timing.authGoogleAccessTokenFromRefreshToken = $.data.authGoogleAccessTokenFromRefreshToken.timing;



	// console.log(JSON.stringify($, null, 4));
	response.status(200).append("Content-Type", $.output.headers["Content-Type"]).send(JSON.stringify($.output, null, 4));

});
*/
