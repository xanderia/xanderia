
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HeaderBar from '../screens/HeaderBar'



import ConfigurationScreen	from '../screens/ConfigurationScreen';
import OnboardingScreen		from '../screens/OnboardingScreen';
import CheckoutScreen		from '../screens/CheckoutScreen';
import TransactionsScreen	from '../screens/TransactionsScreen';
import DisputesScreen		from '../screens/DisputesScreen';

const ConfigurationStack	= createStackNavigator({ Configuration:	ConfigurationScreen },	{ defaultNavigationOptions: { headerTitle: <HeaderBar /> } });
const OnboardingStack		= createStackNavigator({ Onboarding:	OnboardingScreen },		{ defaultNavigationOptions: { headerTitle: <HeaderBar /> } });
const CheckoutStack			= createStackNavigator({ Checkout:		CheckoutScreen},		{ defaultNavigationOptions: { headerTitle: <HeaderBar /> } });
const TransactionsStack		= createStackNavigator({ Transactions:	TransactionsScreen },	{ defaultNavigationOptions: { headerTitle: <HeaderBar /> } });
const DisputesStack			= createStackNavigator({ Disputes:		DisputesScreen },		{ defaultNavigationOptions: { headerTitle: <HeaderBar /> } });

ConfigurationStack.navigationOptions	= { tabBarLabel: 'Configuration',	tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={"cog"} /> ) };
OnboardingStack.navigationOptions		= { tabBarLabel: 'Onboarding',		tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={"user-plus"} /> ) };
CheckoutStack.navigationOptions			= { tabBarLabel: "Checkout",		tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={"shopping-cart"} /> ) };
TransactionsStack.navigationOptions		= { tabBarLabel: 'Transactions',	tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={"list"} /> ) };
DisputesStack.navigationOptions			= { tabBarLabel: 'Disputes',		tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={"exclamation-triangle"} /> ) };



export default createBottomTabNavigator({ ConfigurationStack, OnboardingStack, CheckoutStack, TransactionsStack, DisputesStack },
	{
		initialRouteName: 'CheckoutStack',
		lazy: true,

		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#00ffff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#00ffff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);
