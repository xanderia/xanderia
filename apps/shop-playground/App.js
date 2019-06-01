
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

import XATAContext from "./xata/context";
import auth from "./xata/auth";
import log from "./xata/log";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "./firebase-credentials";
firebase.initializeApp(firebaseConfig);

import { useScreens } from 'react-native-screens';
if (Platform.OS !== "web") {
	useScreens();
}



export default class App extends React.Component {
	state = {
		isLoadingComplete:					false,

		firebaseAuth:						false,
		firebaseAuthCompleted:				false,
		xanderiaDeviceId:					null,
		xanderiaDeviceIdExistedAtLaunch:	null,

		theme:								null,
		lightnessMode:						null,
		locale:								null,
		language:							null
	};

	setTheme			= _ => { this.setState(({ theme })			=> ({ theme: _ })); };
	setLightnessMode	= _ => { this.setState(({ lightnessMode })	=> ({ lightnessMode: _ })); };
	setLocale			= _ => { this.setState(({ locale })			=> ({ locale: _ })); };
	setLanguage			= _ => { this.setState(({ language })		=> ({ language: _ })); };

	setFirebaseAuth = _ => {
		let f = {
			name: "App.setFirebaseAuth()",
			firebaseAuth: _.firebaseAuth
		};
		log.c(f);
		this.setState({firebaseAuth: f.firebaseAuth, firebaseAuthCompleted: true});
	};

	// TODO: Log out, log in with Google/Twitter/...

	// $ = {
	// 	xanderiaDeviceId: null,
	// 	xanderiaDeviceIdExistedAtLaunch: null
	// };

	constructor(props) {

		super(props);

		// let f = {name: "App.constructor()"};
		//
		// console.log(f.name + ": started", {this: this});
	}

	initAuth() { return new Promise(async (resolve, reject) => {
		let f = {
			name:		"App.initAuth()",
			authResult:	null,
			firebaseAuth: null
		};

		f.authResult = await auth.init({setFirebaseAuth: this.setFirebaseAuth, firebaseAuthCompleted: this.state.firebaseAuthCompleted});
		f.firebaseAuth = f.authResult.data.firebaseAuth;
		log.c(f);
		// this.setFirebaseAuth(f.firebaseAuth);

		resolve({success: true});
	});};

	// componentDidMount() {
		// let f = "App.componentDidMount()";
	// };



	render() {
		let f = {
			name:	"App.render()",
			conditionAppLoading: !this.state.isLoadingComplete && !this.props.skipLoadingScreen,
			contextValue: {
				firebaseAuth:			this.state.firebaseAuth,
				firebaseAuthCompleted:	this.state.firebaseAuthCompleted,
				setFirebaseAuth:		this.setFirebaseAuth,
				theme:					this.state.theme,
				setTheme:				this.setTheme,
				lightnessMode:			this.state.lightnessMode,
				setLightnessMode:		this.setLightnessMode,
				locale:					this.state.locale,
				setLocale:				this.setLocale,
				language:				this.state.language,
				setLanguage:			this.setLanguage
			},
			thisState: this.state
		};

		log.c(f);



		if (f.conditionAppLoading) {
			return ( <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading}/> );
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<XATAContext.Provider value={f.contextValue}>
						<AppNavigator />
					</XATAContext.Provider>
				</View>
			);
		}
	};

	_loadResourcesAsync = async () => {
		let f = {
			name: "App._loadResourcesAsync()"
		};

		return Promise.all([
			this.initAuth(),
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
		let f = {
			name: "App._handleLoadingError()",
			error: error
		};
		log.c(f);
	};

	_handleFinishLoading = () => {
		let f = {
			name: "App._handleFinishLoadin()"
		};
		this.setState({ isLoadingComplete: true });
	};
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
