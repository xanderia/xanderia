
const moment = require("moment");

let db = false;
let firebaseAdmin = false;



///////////////////////////////////////////////////
// Moment Cheat Sheet
// ==================
// const m = moment();
// const md = moment(Date.now());
// m.toISOString()	-> 2019-04-08T09:46:43.781Z
// m.valueOf()		-> 1554716803781
// m.toDate()		-> Date() object
///////////////////////////////////////////////////



const severityLevels = {
	"0": {number: 0,	name: "meaningless",	expiration: "P2D",		notification: "none",			description: "",	example: ""},

	"1": {number: 1,	name: "debug-low",		expiration: "P3D",		notification: "none",			description: "",	example: ""},
	"2": {number: 2,	name: "debug-high",		expiration: "P8D",		notification: "none",			description: "",	example: ""},
	"3": {number: 3,	name: "",				expiration: "P14D",		notification: "summary-weekly",	description: "",	example: "Successful fetch of a PayPal Access Token."},
	"4": {number: 4,	name: "",				expiration: "P14D",		notification: "summary-weekly",	description: "",	example: "Successful fetch of a PayPal UCC Client Token"},
	"5": {number: 5,	name: "",				expiration: "P60D",		notification: "summary-daily",	description: "",	example: ""},
	"6": {number: 6,	name: "",				expiration: "P60D",		notification: "summary-daily",	description: "",	example: ""},
	"7": {number: 7,	name: "",				expiration: "",			notification: "immediate",		description: "",	example: ""},
	"8": {number: 8,	name: "highest",		expiration: "",			notification: "immediate",		description: "Developer error with crucial consequences - must be fixed immediately",	example: "PayPal Access Token cannot be retrieved."},

	"9": {number: 9,	name: "cataclysmic",	expiration: "",			notification: "immediate",		description: "Full large-scale outage including potential data loss.",	example: "Firebase hosting or database offline."}
};



const init = (_) => {
	db = _.firebaseDbHandle;
	firebaseAdmin = _.firebaseAdminModule;
};



const createEvent = async (_) => {
	return db.collection("logs.events").add(_);
};

const createUniversalEvent = async (time, eventIds = []) => {
	return db.collection("logs.universal-events").add({eventIds, time: time });
};

const addUniversalEventIdsToEvent = async (eventDocId, universalEventIds) => {
	return db.collection("logs.events").doc(eventDocId).update({ universalEvents: firebaseAdmin.firestore.FieldValue.arrayUnion.apply(null, universalEventIds) });
};

const add = async (_) => {
	let f = "xata.log.add";
	let momentNow = moment();
	let momentNowFirebase = firebaseAdmin.firestore.Timestamp.fromDate(momentNow.toDate());

	let logData = {
		timestamp:			momentNowFirebase,
		time:				momentNow.toISOString(),

		data:				_.data				|| {_: "No logging data was provided."},
		severity:			_.severity			|| 0,
		origin:				_.origin			|| "",
		location:			_.location			|| "",
		apps:				_.apps				|| [],
		services:			_.services			|| [],
		universalEvents:	_.universalEvents	|| []
	};

	try {
		let eventDoc = await createEvent(logData);

		if (logData.universalEvents.length === 0) {
			let universalEventDoc = await createUniversalEvent(momentNowFirebase, [eventDoc.id]);
			logData.universalEvents = [universalEventDoc.id];
		}
		await addUniversalEventIdsToEvent(eventDoc.id, logData.universalEvents);

		return ({ eventId: eventDoc.id, universalEventId: logData.universalEvents[0] });
	}
	catch (error) {
		console.log(f, "error", {error: error});
		return (false);
	}
};



const terminal = (_) => {
	console.log(_);
};



const fetchToString = (_) => {
	// return(
	// 	_.method + " " + _.url + "\n\n" +
	// 	_.headers.raw() + "\n\n" +
	// 	Buffer.from(_.rawBody).toString('ascii')
	// );
};

const fetchToJSON = (_) => {
	// let f = 'xata.log.fetchToJSON';
	//
	// let r = {
	// 	method:		typeof _.method !== "undefined" ? _.method : false,
	// 	url:		_.url,
	// 	headers:	JSON.stringify(_.headers.raw()),
	// 	bodyType:	typeof _.body,
	// 	body:		_.body // _.text().then((t) => { return (t); }).catch((e) => {console.log('xata.log.fetchToJSON error: ' + e); }) //(typeof _.rawBody !== "undefined") ? (Buffer.from(_.rawBody).toString('ascii')) : _.body
	// };
	//
	// console.log(f, {_, r});
	//
	// return(r);
};



module.exports = {
	init,
	add,
	terminal,
	fetchToString,
	fetchToJSON
};


// let f = "functions.loggingTest";
// let timeNow = firebaseAdmin.firestore.Timestamp.fromDate(new Date());
//
// try {
// 	let logEventDoc = await db.collection("logs.events").add({
// 		apps:		[{id: "shop-playground"}],
// 		services:	[{id: "paypal"}],
// 		origin:		{name: "paypal.webhooks"},
// 		time:		timeNow,
// 		data: {
// 			test:	"something"
// 		}
// 	});
//
// 	let logUniversalEventDoc = await db.collection("logs.universal-events").add({
// 		time:	timeNow,
// 		events:	[logEventDoc.id]
// 	});
//
// 	let updateResult = await logEventDoc.update({
// 		universalEvents: [logUniversalEventDoc.id]
// 	});
// }
// catch (error) {
// 	console.log(f, "An error occured during writing", {error: error});
// }






// TODO Masking

/*

import { Constants } from "expo";
import moment from "moment";
import uuid from "uuid/v4";



export default function log (severity, location, data) {

	if (severity < Constants.manifest.extra.logLevel) {
		return;
	}

	// Time
	let _time = Date.now();
	let _moment = moment(_time).toISOString();

	console.log({
		_: {
			time:			_time,
			moment:			_moment,
			severity:		severity,
			severityLevel:	Constants.manifest.extra.logLevel,
			location:		location,
			//caller:		this.caller
		},

		...data
	});
}


*/
