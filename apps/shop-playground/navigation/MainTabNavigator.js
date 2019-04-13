import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import ConfigurationScreen	from '../screens/ConfigurationScreen';
import OnboardingScreen		from '../screens/OnboardingScreen';
import CheckoutScreen		from '../screens/CheckoutScreen';
import TransactionsScreen	from '../screens/TransactionsScreen';
import DisputesScreen		from '../screens/DisputesScreen';

const ConfigurationStack =	createStackNavigator({ Configuration: ConfigurationScreen });
const OnboardingStack =		createStackNavigator({ Onboarding: OnboardingScreen });
const CheckoutStack =		createStackNavigator({ Checkout: CheckoutScreen });
const TransactionsStack =	createStackNavigator({ Transactions: TransactionsScreen });
const DisputesStack =		createStackNavigator({ Disputes: DisputesScreen });

ConfigurationStack.navigationOptions = {
	tabBarLabel: 'Configuration',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } />
	),
};

OnboardingStack.navigationOptions = {
	tabBarLabel: 'Onboarding',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } />
	),
};

CheckoutStack.navigationOptions = {
	tabBarLabel: 'Checkout',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } />
	),
};

TransactionsStack.navigationOptions = {
	tabBarLabel: 'Transactions',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } />
	),
};

DisputesStack.navigationOptions = {
	tabBarLabel: 'Disputes',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } />
	),
};

/*
const LinksStack = createStackNavigator({
	Links: LinksScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: 'Links',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
		/>
	),
};
*/

/*
const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
		/>
	),
};
*/

export default createBottomTabNavigator({
	ConfigurationStack,
	OnboardingStack,
	CheckoutStack,
	TransactionsStack,
	DisputesStack
//	LinksStack,
//	SettingsStack,
},
{initialRouteName: 'CheckoutStack'}
);
