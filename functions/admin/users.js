"use strict";

const log				= require("../xata/log");
const uuid				= require("uuid/v4");
const fetch				= require("node-fetch");
const moment			= require("moment");
const functions 		= require('firebase-functions');
const firebaseAdmin		= require('firebase-admin');

var firebaseCredentials	= require("../config/xanderia-e7b8f-firebase-adminsdk-nhxqs-d7c63cc86d.json");



module.exports = functions.https.onRequest(async (request, response) => {
	let f = "functions.adminUsers";
	let collectionName = "users.people";
	let dbDocument = null;
	let dbCollection = null;
	let httpOutput = "";
	let collectionJSON = {};

	if (! firebaseAdmin.apps.length) {
		firebaseAdmin.initializeApp({credential: firebaseAdmin.credential.cert(firebaseCredentials), databaseURL: "https://xanderia-e7b8f.firebaseio.com" });
		// log.init({ firebaseDbHandle: db, firebaseAdminModule: firebaseAdmin });
	}
	const db = firebaseAdmin.firestore();

	try {
		// dbDocument = await db.collection('users.people').doc("alexgrafe83").get();
		dbCollection = await db.collection(collectionName).get();
	}
	catch (_) {
		console.log(f + ": Error on db.collection('" + collectionName + "').get(): " + _.message);
		httpOutput += f + ": Error on db.collection('" + collectionName + "').get(): " + _.message;
	}

	// if (dbDocument.exists) {
	// 	httpOutput += JSON.stringify(dbDocument.data(), null, 2);	// dbDocument.id exists as well
	// } else {
	// 	console.log(f + ": dbDocument does not exist");
	// 	httpOutput += f + ": dbDocument does not exist";
	// }

	dbCollection.forEach(_ => {
		collectionJSON[_.id] = _.data();
	});

	httpOutput += JSON.stringify(collectionJSON, null, 4);




	response
	.status(200)
	.append("Content-Type", "text/plain")
	// .append("X-Xanderia-Log-Event-Id", logs.eventId)
	// .append("X-Xanderia-Log-Universal-Id", logs.universalEventId)
	// .append("X-Xanderia-Log-View", "https://xanderia.one/logs/" + logs.eventId)
	.send(httpOutput);
});
