
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "./firebase-config";

import XATAContext from "./xata/context";
// import xid from "./xata/xid";



firebase.initializeApp(firebaseConfig);

import { useScreens } from 'react-native-screens';
if (Platform.OS !== "web") {
	useScreens();
}

// 🆃🅾🅳🅾 `XATAContext.Provider` needs to pass actual values and have good defaults.

export default class App extends React.Component {
	state = {
		isLoadingComplete:	false,
		firebaseAuth:		null,
		theme:				null,
		lightnessMode:		null,
		locale:				null,
		language:			null
	};

	$ = {
		xanderiaDeviceId = null,
		deviceIdExisted = null
	};

	constructor(props) {

		super(props);

		let f = {name: "App.constructor()"};

		console.log(f.name, "$: ", typeof this.$, typeof this.$);
		// TODO		Put into $
		// TODO		Put into react's context
		let xanderiaDeviceId = localStorage.getItem("xanderiaDeviceId");
		let deviceIdExisted = null;


		if (xanderiaDeviceId !== null) {
			deviceIdExisted = true;

		} else {
			deviceIdExisted = false;
			xanderiaDeviceId = xid();
		}

		firebase.auth().signInAnonymously().catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(f.name + " @signInAnonymously: Error", {error: error});
		});

		console.log(f.name + ": started", {props: props, xanderiaDeviceId: xanderiaDeviceId, "$": this.$});
	}

	componentDidMount() {

		let f = "App.componentDidMount()";

		console.log(f + ": started", {this: this});
		let _this = this;

		firebase.auth().onAuthStateChanged(function(user) {
			console.log(f + ".onAuthStateChanged:", {user: user});

			if (_this.state.firebaseAuth !== null || user !== null) {
				_this.setState({ firebaseAuth: user });
			}

			if (user) {
				var displayName		= user.displayName;
				var email			= user.email;
				var emailVerified	= user.emailVerified;
				var photoURL		= user.photoURL;
				var isAnonymous		= user.isAnonymous;
				var uid				= user.uid;
				var providerData	= user.providerData;
			} else {
			}
		});
	}

	setTheme			= _ => { this.setState(({ theme })			=> ({ theme: _ })); };
	setLightnessMode	= _ => { this.setState(({ lightnessMode })	=> ({ lightnessMode: _ })); };
	setLocale			= _ => { this.setState(({ locale })			=> ({ locale: _ })); };
	setLanguage			= _ => { this.setState(({ language })		=> ({ language: _ })); };


	render() {
		let contextValue = {firebaseAuth: this.state.firebaseAuth, theme: this.state.theme, setTheme: this.setTheme, lightnessMode: this.state.lightnessMode, setLightnessMode: this.setLightnessMode, locale: this.state.locale, setLocale: this.setLocale, language: this.state.language, setLanguage: this.setLanguage};


		console.log("App.render(): started", {"state": this.state, contextValue});
		console.log("================================");

		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return ( <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading}/> );
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<XATAContext.Provider value={contextValue}>
						<AppNavigator />
					</XATAContext.Provider>
				</View>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				// require('./assets/images/robot-dev.png'),
				// require('./assets/images/robot-prod.png'),
			]),
			Font.loadAsync({
				// This is the font that we are using for our tab bar
				// ...Icon.Ionicons.font,
				...Icon.FontAwesome.font
				// We include SpaceMono because we use it in HomeScreen.js. Feel free
				// to remove this if you are not using it in your app
				// 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
			}),
		]);
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
