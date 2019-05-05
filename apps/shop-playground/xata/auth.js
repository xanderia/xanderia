
import {Platform} from "react-native";



const chooseRedirectOrPopup = _ => {

	if (Platform.OS === "web"		&& window.screenTop === 0) { return ("redirect"); }
	if (Platform.OS === "web"		&& window.screenTop !== 0) { return ("popup"); }
};

const authFlowUrl = _ => {
	return ("https://xanderia.one/login/google/start");
};


const startAuthFlow = _ => {
	const f = "xata.auth.startAuthFlow()";

	const authProvider = _.authProvider || console.warn(f + ": `_.authProvider cannot be null");
	const useRedirectOrPopup = _.useRedirectOrPopup || chooseRedirectOrPopup();
	const url = authFlowUrl({authProvider});

	console.log(f + ": starting auth flow", {authProvider: authProvider, useRedirectOrPopup: useRedirectOrPopup, url: url});

	// if (!window.confirm("Proceed to the auth flow?")) { return; }

	if (useRedirectOrPopup === "redirect") {
		document.location.assign(url);
		return({status: "loading redirect"});
	} else if (useRedirectOrPopup === "popup") {
		let windowReference = window.open(url, "", "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=624,height=968,bottom=0,left=0"); // height +22
		return({status: "loading popup", windowReference: windowReference});
	}
};


export default {
	startAuthFlow
};
