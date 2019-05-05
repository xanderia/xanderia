
import React from 'react';
import {
	// Button,
	// Image,
	Platform,
	// ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import XATAContext from "../xata/context";
import auth from "../xata/auth";



export default class AuthArea extends React.Component {

	constructor (props) {
		super(props);
		console.log("AuthArea.constructor(): started");
	}

	// 🆃🅾🅳🅾 Redirect should show loading animation within the button
	// 🆃🅾🅳🅾 Externalize Google Auth flow
	onPress() {
		const f = "AuthArea.onPress()";
		console.log(f + ": started", {"this": this, auth: auth});

		// TODO put this into react `context` and do this centrally

		let authFlowResult = auth.startAuthFlow({authProvider: "google"});
		console.log(f + ": authFlowResult", {authFlowResult: authFlowResult});
	}

	render() {
		console.log("AuthArea.render(): started");

		let auth = null;

		return (
			<View style={s.MainView}>
				<TouchableOpacity onPress={this.onPress} style={s.LoginButton}>
					<XATAContext.Consumer>{_ => {
							if (_.firebaseAuth !== null) {
								return (<Text style={s.LoginText}>My Username</Text>);
							} else {
								return (<Text style={s.LoginText}>Login</Text>);
							}
						}}
        			</XATAContext.Consumer>

				</TouchableOpacity>
			</View>
		);
	}
}



const s = StyleSheet.create({
	MainView: {
		width:				"100%",
		height:				"100%",

		display:			"flex",
		flexDirection:		"row",
		flexWrap:			"nowrap",
		justifyContent:		"center",
		alignItems:			"center",
		alignContent:		"center"
	},

	LoginButton: {
		flex:				1,

		marginTop:			"auto",
		marginBottom:		"auto",
		marginLeft:			"auto",
		marginRight:		"auto",
		height:				"35px",
		width:				"80px",

		backgroundColor:	"hsla(94, 78%, 57%, 1)"
	},

	LoginText: {
		marginLeft:			"auto",
		marginRight:		"auto",
		marginTop:			"auto",
		marginBottom:		"auto",

		backgroundColor:	"hsla(93, 57%, 23%, 1)"
	}
});
