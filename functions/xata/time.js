
const moment		= require("moment");
const firebaseAdmin = require('firebase-admin');



const objFromMoment = _ => {
	return({
		milliseconds:	_.valueOf(),
		utc:			_.toISOString(),
		firebase:		firebaseAdmin.firestore.Timestamp.fromDate(_.toDate())
	});
};



const durationFromMoments = (_1, _2) => {

	return({
		milliseconds:	_2.diff(_1),
		seconds:		String(_2.diff(_1, 'seconds', true)),
		iso:			moment.duration(_2.diff(_1)).toISOString(),
	});
};



module.exports = { objFromMoment, durationFromMoments };
