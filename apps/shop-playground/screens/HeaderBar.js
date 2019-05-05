
import React from 'react';
import {
	Button,
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { Svg } from 'expo';
// const { G, Circle, Rect } = Svg;

import AuthArea from "../components/AuthArea";


// 🅽🅾🆃🅴 `render` is called once for each bottom tab entry, e.g. five times.
// 🆃🅾🅳🅾 Needs auth state to pass to `AuthView`

// <Svg height={100} width={100}>
// 	<Svg.Circle cx={50} cy={50} r={45} strokeWidth={2.5} stroke="#e74c3c" fill="#f1c40f"/>
// 	<Svg.Rect x={15} y={15} width={70} height={70} strokeWidth={2} stroke="#9b59b6" fill="#3498db"/>
// </Svg>

export default class HeaderBar extends React.Component {
	render() {
		console.log("HeaderBar.render(): started");
		console.log("Use this console filter: -PanGestureHandler -[Violation] -Animation");

		return (
			<View style={s.MainView}>
				<View style={s.AppMenuView}>
					<Text style={s.TextPlaceholder}>MENU</Text>
				</View>

				<View style={s.TitleView}>
					<Text style={s.TextPlaceholder}>TITLE</Text>
				</View>

				<View style={s.AuthView}>
					<AuthArea/>
				</View>
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
		justifyContent:		"space-between",
		alignItems:			"stretch",
		alignContent:		"stretch",

		// backgroundColor:	"hsla(9, 91%, 36%, 1)"
	},

	AppMenuView: {
		flex:				1,

		backgroundColor:	"hsla(95, 88%, 34%, 1)"
	},

	TitleView: {
		flex:				3,

		backgroundColor:	"hsla(225, 62%, 25%, 1)"
	},

	AuthView: {
		flex:				1,

		backgroundColor:	"hsla(314, 38%, 24%, 1)"
	},

	TextPlaceholder: {
		marginLeft:			"auto",
		marginRight:		"auto",
		marginTop:			"auto",
		marginBottom:		"auto",

		color:				"white",
		fontWeight:			"bold"
	}
});
