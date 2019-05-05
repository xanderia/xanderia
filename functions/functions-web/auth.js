"use strict";

const functions 			= require("firebase-functions");
const firebaseAdmin			= require("firebase-admin");
const moment				= require("moment");

const time					= require("../xata/time");
const authGoogle			= require("../xata/authGoogle");
const functionsHelper		= require("../xata/functionsHelper");



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
