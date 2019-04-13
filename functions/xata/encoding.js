
const ASCIItoBase64 = function (x) { return (Buffer.from(x).toString('base64')); };
const Base64toASCII = function (x) { return (textdata = Buffer.from(x, 'base64').toString('ascii')); }



module.exports = {
	ASCIItoBase64,
	Base64toASCII
};
