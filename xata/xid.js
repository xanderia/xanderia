/*

require! {
	"crypto":		crypto
}


module.exports = do

	create: ->
		possible = "ABCDEFGHKMPQRSTVWXYZ345689edghpq"
		xid-length = 32
		xid = ""
		random-array = new Uint8Array xid-length

		crypto.random-fill-sync random-array												# NOTE In a browser use <<window.crypto.getRandomValues random-array>>

		for i from 0 to xid-length-1
			xid += possible.char-at (random-array[i] / 8)

		xid


	create-timed: ->
		(new Date!).toISO-string!.replace(/(?::|\.)/g, '-') + xid!


*/
