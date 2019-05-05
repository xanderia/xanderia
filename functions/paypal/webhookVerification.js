"use strict";

const fetch					= require("node-fetch");
const crc32					= require("buffer-crc32");
const crypto				= require("crypto");

const firebaseAdmin			= require('firebase-admin');



module.exports = _ => new Promise(async (resolve, reject) => {

	const f = "paypal.webhookVerification";
	let expectedSignature = _.transmissionId + "|" + _.transmissionTime + "|" + _.webhookCreationId + "|" + crc32.unsigned(_.rawBody); // `_.rawBody` already is a buffer which it has to be!
	let cryptoResult = null;

	try {
    	cryptoResult = crypto.createVerify('sha256WithRSAEncryption').update(expectedSignature).verify(_.certBuffer, _.transmissionSig, 'base64');
		if (cryptoResult === true) {	resolve({	status: "success",	errors: [{ errorCode: null,							errorMessage: null }] }); }
	}
	catch (error) {						reject({	status: "failure",	errors: [{ errorCode: "verification-threw-error",	errorMessage: "Verification threw error: " + error.message }] }); }
	if (cryptoResult === false) {		reject({	status: "failure",	errors: [{ errorCode: "verification-false",			errorMessage: "Verification returned 'false'" }] }); }
	else {								reject({	status: "failure",	errors: [{ errorCode: "verification-non-boolean",	errorMessage: "Verification returned non-Boolean value: " + typeof cryptoResult }] }); }
});
