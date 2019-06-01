
import {Platform} from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "../firebase-config";

import log from "./log";
import xid from "./xid";



const init = _ => new Promise(async (resolve, reject) => {

	let f = {
		name: "xia.auth.init",
		anonymousUserId: null,
		userObj: null,
		xanderiaDeviceId: null,
		xanderiaDeviceIdExistedAtLaunch: null,
		error: null
	};

	f.xanderiaDeviceId = localStorage.getItem("xanderiaDeviceId");

	if (f.xanderiaDeviceId !== null) {
		f.xanderiaDeviceIdExistedAtLaunch = true;
	} else {
		f.xanderiaDeviceIdExistedAtLaunch = false;
		f.xanderiaDeviceId = xid();

		localStorage.setItem("xanderiaDeviceId", f.xanderiaDeviceId);
	}



	let unsubscribeAuthListener = firebase.auth().onAuthStateChanged(function(user) {
		let f2 = {
			name:			"xia.auth.onAuthStateChanged()",

			isAnonymous:	user.isAnonymous,
			displayName:	user.displayName,
			email:			user.email,
			emailVerified:	user.emailVerified,
			phoneNumber:	user.phoneNumber,
			photoURL:		user.photoURL,
			providerData:	user.providerData,
			creationTime:	user.metadata.creationTime,
			lastSignInTime:	user.metadata.lastSignInTime
		};

		log.c(f2);

		_.setFirebaseAuth({firebaseAuth: user});

		// TODO use Context
		// if (_this.state.firebaseAuth !== null || user !== null) {
		// 	_this.setState({ firebaseAuth: user, firebaseAuthCompleted: true });
		// }

		// if (user) {
		// 	var displayName		= user.displayName;
		// 	var email			= user.email;
		// 	var emailVerified	= user.emailVerified;
		// 	var photoURL		= user.photoURL;
		// 	var isAnonymous		= user.isAnonymous;
		// 	var uid				= user.uid;
		// 	var providerData	= user.providerData;
		// } else {
		// }
	});

	if ( ! _.firebaseAuthCompleted) {
		try {
			f.anonymousUserId = await firebase.auth().signInAnonymously();
			f.userObj = firebase.auth().currentUser;
			log.c(f);

			resolve({
				success: true,
				status: "updated-firebaseAuth-anonymous",
				data: {
					firebaseAuth: f.userObj
				}
			});
		} catch (error) {
			f.error = error;
			log.c(f);
			reject({
				success: false,
				status: "anonymous-signin-failed",
				data: { errors: [ error ] }
			});
		}
	} else {
		resolve({
			success: true,
			status: "firebaseAuth-already-completed",
			data: {
			}
		});
	}
});



const chooseRedirectOrPopup = _ => {

	if (Platform.OS === "web"		&& window.screenTop === 0) { return ("redirect"); }
	if (Platform.OS === "web"		&& window.screenTop !== 0) { return ("popup"); }
};



const getAuthFlowUrlForProvider = _ => {
	return ("https://xanderia.one/login/google/start");
};



const startAuthFlow = _ => {
	let f = {
		name:				"xata.auth.startAuthFlow()",
		authProvider:		null,
		useRedirectOrPopup:	null,
		authFlowUrl:		null,
		windowReference:	null
	};

	f.authProvider = _.authProvider || console.warn(f.name + ": `_.authProvider` cannot be null");
	f.useRedirectOrPopup = _.useRedirectOrPopup || chooseRedirectOrPopup();
	f.authFlowUrl = getAuthFlowUrlForProvider({authProvider: f.authProvider});

	log.c(f);

	if (f.useRedirectOrPopup === "redirect") {
		document.location.assign(url);
		return({status: "loading redirect"});
	} else if (f.useRedirectOrPopup === "popup") {
		f.windowReference = window.open(f.authFlowUrl, "", "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=624,height=968,bottom=0,left=0"); // height +22
		return({status: "loading popup", windowReference: f.windowReference});
	}
};


export default { init, startAuthFlow };
