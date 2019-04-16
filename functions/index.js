'use strict';



const paypal	= require("./paypal");
const admin		= require("./admin");


// TODO Create function to notify according to `notification` via email and/or Slack. Listen for additions to log where `notification` is not empty.
// TODO Create function to purge old logs according to `expiration`

exports.paypalWebhooks =		paypal.webhooks;
exports.paypalUCCClientToken =	paypal.retrieveUCCClientToken;
exports.paypalOrderCreate =		paypal.orderCreate;
exports.paypalOrderCapture =	paypal.orderCapture;

exports.adminUsers =			admin.users;
