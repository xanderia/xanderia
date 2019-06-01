


 const xid = _ => {

	const xidChars = "ABCDEFGHKMPQRSTVWXYZ345689edghpq";
	const xidLength = 32;
	let xidString = "";
	let randomArray = new Uint8Array(xidLength);

	window.crypto.getRandomValues(randomArray);

	for (const x of randomArray) {
		xidString += xidChars.charAt( Math.floor(x / 8) );
	}

	// TODO offer _.: create-timed: -> (new Date!).toISO-string!.replace(/(?::|\.)/g, '-') + xid!

	return (xidString);
}

export default xid;
