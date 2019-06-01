"use strict";

const uuid					= require("uuid/v4");
const fetch					= require("node-fetch");
const moment				= require("moment");
const firebaseAdmin			= require('firebase-admin');
const queryString			= require("query-string");

const log					= require("../xata/log");
const security				= require("../xata/security");
const time					= require("../xata/time");
const encoding				= require("../xata/encoding");
const apiCall				= require("../xata/apiCall");

const googleCredentials		= require("../config/google-credentials.js");



const api = {
	google: {
		discoveryDocument:		"https://accounts.google.com/.well-known/openid-configuration",
		issuer:					"https://accounts.google.com",
		authorization_endpoint:	"https://accounts.google.com/o/oauth2/v2/auth",
		token_endpoint:			"https://oauth2.googleapis.com/token",
		userinfo_endpoint:		"https://openidconnect.googleapis.com/v1/userinfo",
		revocation_endpoint:	"https://oauth2.googleapis.com/revoke",
		jwks_uri:				"https://www.googleapis.com/oauth2/v3/certs"
	},

	paypal: {}
};




exports.loginFinish = async _ => {
	let $ = {
		name:								"xata.authGoogle.loginFinish",
		config: {
		},
		input: {
		},
		output: {
		},
		data: {
			error:							false,
			apiCalls: {
				googleLoginFinish: {
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
					result:					null,
					response: {
						status: 			null,
						headers:			{},
						headersRaw:			null,
						body:				{},
						bodyRaw:			null
					}
				}
			}
		},
		timing: {
		}
	};


	$.data.apiCalls.googleLoginFinish.result = apiCall.invoke({
	});
	// if (f.data.apiCalls.googleRefreshToken.response.body.error === "invalid_grant") {
	// 	throw new Error("Invalid Auth Code. Google OAuth API returned: error:invalid_grant");
	// }
};




exports.accessTokenFromRefreshToken = async _ => {

	let $ = {
		name:				"xata.authGoogle.accessTokenFromRefreshToken",
		input:				_,
		output: {
			success:		false,
			status:			"started",
			data: {
			},
			timing: {
				start:		{},
				end:		{},
				duration:	{}
			}
		},
		data: {
			apiResult:		null,
			moments: {
				start:		moment.utc(),
				end:		null
			}
		}
	};

	$.output.timing.start = time.objFromMoment($.data.moments.start);



	$.data.apiResult = await apiCall.invoke({
		request: {
			method:				"POST",
			url:				api.google.token_endpoint,
			headers: {
								"Content-Type":	"application/x-www-form-urlencoded"
			},
			body:				queryString.stringify({
				client_id:		googleCredentials.clientId,
				client_secret:	googleCredentials.clientSecret,
				refresh_token:	"1/Fq1fGCZ6B2XOX5PXUevuxKEyz_PaGT1eEfC9iVUh9Gc",
				grant_type:		"refresh_token"
			})
		}
	});

	if ($.data.apiResult.success) {

	} else {
	}


	$.data.moments.end = moment.utc();
	$.output.timing.end = time.objFromMoment($.data.moments.end);
	$.output.timing.duration = time.durationFromMoments($.data.moments.start, $.data.moments.end);



	// console.log($);
	return($.output);
};




// POST https://accounts.google.com/o/oauth2/revoke?token={accessToken or RefreshToken}
// "Content-type:application/x-www-form-urlencoded"

exports.revoke = _ => {
	// let apiResult = apiCall.invoke();
};
