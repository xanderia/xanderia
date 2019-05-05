"use strict";



exports.inputFromRequest = _ => ({
	headers:		_.headers,
	// headersRaw:		_.rawHeaders,
	method:			_.method,
	url:			_.url,
	params:			_.params,
	query:			_.query,
	body:			_.body
});
