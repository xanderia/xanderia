
const moment = require("moment");
const log = require("./log");

let db = false;
let firebaseAdmin = false;









const init = (_) => {
	db = _.firebaseDbHandle;
	firebaseAdmin = _.firebaseAdminModule;
};



const invoke = (_) => {
};






module.exports = {
	init,
	invoke
};
