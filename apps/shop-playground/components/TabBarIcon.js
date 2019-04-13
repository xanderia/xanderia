import React from 'react';
import { Text } from 'react-native';
//import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
		<Text style={{borderWidth: "1px", borderStyle: "solid", borderColor: "black", borderRadius: "50%", fontSize: "12px", width: "20px", height: "20px", textAlign: "center"}}>i</Text>
		/*
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
	  */
    );
  }
}
