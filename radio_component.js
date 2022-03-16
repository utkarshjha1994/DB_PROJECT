import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomRadioButton from './customRadioButton';


const val = [
	{
		key: 'mysql',
		text: 'MySql',
	},
	{
		key: 'redshift',
		text: 'RedShift',
	},
	
];


export default class RadioButtonComponenet extends Component {

  render() {
    return (
      <View style={styles.rbWrapper}>
        <CustomRadioButton PROP={val} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rbWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});