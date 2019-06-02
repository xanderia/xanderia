
import {Platform} from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "../firebase-credentials";

import log from "./log";
import xid from "./xid";



// This file owns the client's services.auth data obj and takes care of initializing the entire client data on which all others build on top of.



const initialClientDataObj = {
	_xiaTimeCreatedFirebase: "",
	_xiaTimeCreatedFirebase: "...",
	_xiaTimeCreatedMilliseconds: "...",
	_xiaTimeCreatedUTC: "...",

	_xiaTimeModifiedFirebase: "...",
	_xiaTimeModifiedMilliseconds: "...",
	_xiaTimeModifiedUTC: "...",

	_xiaStatus: "active",					//  # / "deleted" / "marked_for_deletion" / ...

	services: {
		auth: {
			tasks: {
				"time=2019-04-19T08:20:02.640Z|priority=3|id=UXncmUBAjVbn4C0GV9zyQa5d0nu1": {
					timeCreatedISO: "2019-04-19T08:20:02.640Z",
					priority:		3,
					id:				"TCghYAgp953qPBHd3dRWSeSVgqWBE363",

					taskType:		"startAuthFlowGoogle",
					taskData:		{},
					taskResponse:	{}	// or put this in "../data"
				}
			},

			data: {
			}
		},

		// tracking: {}		// The `tracking` service might want to initialize this itself.
	},

	apps: {
		// shopPlayground: { _: "more" }	// The `shop-playground` app should create this itself.
	}
};


const addTask = _ => new Promise(async (resolve, reject) => {

	const f = {
		name:	"xia.auth.addTask()",
		input: {
		},
		output: {
		},
		data: {
		}
	};

	log.c(f);


});



const initClientDataObj = _ => new Promise(async (resolve, reject) => {

	// use initialClientDataObj
	// only create if not already exists.


});



const init = _ => new Promise(async (resolve, reject) => {

	let f = {
		name: "xia.auth.init()",
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
			name:				"xia.auth.onAuthStateChanged()",
			userObjIsDefined:	(user === null) ? true : false
		};

		if (user !== null) {
			f2.isAnonymous		= user.isAnonymous;
			f2.displayName		= user.displayName;
			f2.email			= user.email;
			f2.emailVerified	= user.emailVerified;
			f2.phoneNumber		= user.phoneNumber;
			f2.photoURL			= user.photoURL;
			f2.providerData		= user.providerData;
			f2.creationTime		= user.metadata.creationTime;
			f2.lastSignInTime	= user.metadata.lastSignInTime;
		}

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
