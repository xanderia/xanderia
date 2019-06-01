
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
import log from "../xata/log";



export default class AuthArea extends React.Component {

	constructor (props) {
		super(props);
	}



	onPress() {
		let f = {
			name: "AuthArea.onPress()",
			_this: this,
			_auth: auth,
			authFlowResult: null
		};

		f.authFlowResult = auth.startAuthFlow({authProvider: "google"});												// TODO put this into react `context` and do this centrally
		log.c(f);
	}



	render() {																											// TODO Redirect should show loading animation within the button

		let f = {
			name: "AuthArea.render()",
			context: null
		};

		return (
			<View style={s.MainView}>
				<TouchableOpacity onPress={this.onPress} style={s.LoginButton}>
					<XATAContext.Consumer>{_ => {
							f.context = _;
							log.c(f);
							if (_.firebaseAuthCompleted === true && _.firebaseAuth !== null && _.firebaseAuth.isAnonymous === false) {
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

		// backgroundColor:	"hsla(94, 78%, 57%, 1)"
	},

	LoginText: {
		marginLeft:			"auto",
		marginRight:		"auto",
		marginTop:			"auto",
		marginBottom:		"auto",

		// backgroundColor:	"hsla(93, 57%, 23%, 1)"
	}
});
