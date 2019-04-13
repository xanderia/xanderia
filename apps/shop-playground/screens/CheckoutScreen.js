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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class CheckoutScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	onPressPaymentFlowButton = async () => {
		let f = "PaymentTestScreen::onPressPaymentFlowButton()";
		console.log(f, ":start", {window: window, document: document});
		let windowReference = window.open("https://xanderia.one", "", "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=624,height=968,bottom=0,left=0"); // height +22
		//let result = await WebBrowser.openBrowserAsync('https://expo.io');
		console.log(f, ":end");
		//this.setState({ result });
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

					<View style={styles.getStartedContainer}>

						<Text>Checkout</Text>

						<Text style={styles.getStartedText}>
							PayPal Payment Test
						</Text>

						<Button style={styles.paragraph} title="Open WebBrowser" onPress={this.onPressPaymentFlowButton} />
					</View>

				</ScrollView>


			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	contentContainer: {
		paddingTop: 30,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
