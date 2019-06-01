
const moment	= require("moment");
const fetch		= require("node-fetch");

const log		= require("./log");
const time		= require("./time");



const invoke = _ => new Promise(async resolve => {

	let $ = {
		name: 					"xata.apiCall.invoke()",
		input: {
			request:			_.request	|| {},
			config:				_.config	|| {}
		},
		data: {
			apiRequest:			{},
			apiResult:			false,
			apiResultBuffer:	false,
			apiResultText:		false,
			apiResultJSON:		false,
			config:				{},
			moments: {
				start:			moment.utc(),
				end:			false
			}
		},
		output: {
			success:			false,
			status:				"started",
			response: {
				status:			null,
				headers:		{},
				headersRaw:		"",
				bodyBuffer:		null,
				bodyText:		null,
				bodyJSON: 		null
			},
			timing: {
				start:			{},
				end:			{},
				duration:		{}
			}
		}
	};

	$.output.timing.start = time.objFromMoment($.data.moments.start);

	$.data.apiRequest = {
		method:			$.input.request.method	|| "GET",
		url:			$.input.request.url		|| "https://example.com",
		headers:		$.input.request.headers	|| {},
		body:			$.input.request.body	|| null
	};

	$.data.config = {
		dataFormat:		$.input.config.dataFormat || "json",
		retries:		$.input.config.retries || {}
	};



	try {
		$.data.apiResult = await fetch($.data.apiRequest.url, $.data.apiRequest);
	} catch (error) {
		$.output.success = false;
		$.output.status = "error - " + error.message;
	}



	$.data.moments.end = moment.utc();
	$.output.timing.end = time.objFromMoment($.data.moments.end);
	$.output.timing.duration = time.durationFromMoments($.data.moments.start, $.data.moments.end);

	$.data.apiResultHeaders = JSON.stringify($.data.apiResult.headers.raw());


	try {
		$.data.apiResultBuffer = await $.data.apiResult.buffer();
		$.data.apiResultText = $.data.apiResultBuffer.toString();
	} catch (error) {
		$.output.success = false;
		$.output.status = "conversion_to_buffer_failed";
	}



	try {
		$.data.apiResultJSON = JSON.parse($.data.apiResultText);
	} catch (error) {
	}



	$.output.success = true;
	// $.





	console.log(JSON.stringify($, null, 4));

	resolve($.output);
});


module.exports = { invoke };
