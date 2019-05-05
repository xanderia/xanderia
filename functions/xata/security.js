
const moment = require("moment");
const encoding = require("./encoding");



module.exports = {
	createCSRFToken: _ => {
		let csrfToken = "";

		csrfToken += Math.random().toString(36).slice(2,12).padEnd(10, "Z");
		csrfToken += Math.random().toString(36).slice(2,12).padEnd(10, "Z");
		csrfToken += Math.random().toString(36).slice(2,12).padEnd(10, "Z");

		return (csrfToken);
	},

	createNonce: _ => {
		let nonce = "";

		nonce += Math.random().toString(36).slice(2,12).padEnd(10, "Z");
		nonce += Math.random().toString(36).slice(2,12).padEnd(10, "Z");
		nonce += Math.random().toString(36).slice(2,12).padEnd(10, "Z");

		return (nonce);
	},



	// EXAMPLE
	// 			id_token: eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkODg3ZjI2Y2UzMjU3N2M0YjVhOGExZTFhNTJlMTlkMzAxZjgxODEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MTU4MjAwOTUyMjEtMnZ1bWVobTFyOWVsaHMyYmkxYTRmNHQxcXZkb20zNGQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MTU4MjAwOTUyMjEtMnZ1bWVobTFyOWVsaHMyYmkxYTRmNHQxcXZkb20zNGQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDAwOTY5Mzk5NjI2NjQ3ODI4NTEiLCJoZCI6InhhbmRlcmlhLm9uZSIsImVtYWlsIjoiYWxleC5ncmFmZUB4YW5kZXJpYS5vbmUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IldnVUhib0F2OXRjZFE2b1JUemRCSWciLCJub25jZSI6ImJkbGU0bWg1NzB4c3lqM2s2ZzFmdmdlMHc2NHMxWiIsIm5hbWUiOiJBbGV4YW5kZXIgR3JhZmUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1sTVRvYlNHZDB6OC9BQUFBQUFBQUFBSS9BQUFBQUFBQVZWdy9jTUxwMjJmaE1nYy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQWxleGFuZGVyIiwiZmFtaWx5X25hbWUiOiJHcmFmZSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTU2ODgzMzA2LCJleHAiOjE1NTY4ODY5MDZ9.IwT2XgbZ4I0JvetsT9b9yBXy7X3lmcD0zEZqYw_xubRVZOsrK5jpjp-AFN8-tjigLkaI_kG9rtzcMpCmB-oywU-7O94kJvCRWlmrwHg6vJ6cuzAupP90umVWfk7OQ4bbZHmqnC8pbYb6__iqXJLY2ax_RZDyyWgMlOaaW8JdC3NY5OM77hP6L_2fiJtLEwlwfWN2W6E6ktfhKMQ376zEd7BONO7dXzREAe-NGsvJamBgyL-NR-fF5n55oDD-_leDlFARapQrpKr_nb2Cb-mgNucF924-ZueEPv2Ov3AaHejuor7gqbo87ulpCyAa8AfoOSWVDU_KgZ0imeVFZvCfrw
	// 			id_token_decoded: {"alg":"RS256","kid":"5d887f26ce32577c4b5a8a1e1a52e19d301f8181","typ":"JWT"}.{"iss":"https://accounts.google.com","azp":"815820095221-2vumehm1r9elhs2bi1a4f4t1qvdom34d.apps.googleusercontent.com","aud":"815820095221-2vumehm1r9elhs2bi1a4f4t1qvdom34d.apps.googleusercontent.com","sub":"100096939962664782851","hd":"xanderia.one","email":"alex.grafe@xanderia.one","email_verified":true,"at_hash":"WgUHboAv9tcdQ6oRTzdBIg","nonce":"bdle4mh570xsyj3k6g1fvge0w64s1Z","name":"Alexander Grafe","picture":"https://lh5.googleusercontent.com/-lMTobSGd0z8/AAAAAAAAAAI/AAAAAAAAVVw/cMLp22fhMgc/s96-c/photo.jpg","given_name":"Alexander","family_name":"Grafe","locale":"en","iat":1556883306,"exp":1556886906}.binary_signature
	decodeIdToken: _ => {
		let idTokenComponents = _.split(".");

		return({
			header:				encoding.Base64toASCII(idTokenComponents[0]),
			body:				encoding.Base64toASCII(idTokenComponents[1]),
			signature_base64:	idTokenComponents[2]
		});
	}
};
