


export default xid = _ => {

	const xidChars = "ABCDEFGHKMPQRSTVWXYZ345689edghpq";
	const xidLength = 32;
	let xid = "";
	let randomArray = new Uint8Array(xidLength);

	window.crypto.getRandomBytes(randomArray);

	for (const x of randomArray) {
		xid += xidChars.charAt( Math.floor(x / 8) );
	}

	// TODO offer _.: create-timed: -> (new Date!).toISO-string!.replace(/(?::|\.)/g, '-') + xid!

	return (xid);
}
