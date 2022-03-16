import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text,Alert  } from 'react-native';
import {   Button,TextInput,useState } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default class CustomRadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
            <View style={styles.container}>
            <View style={styles.subContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text  
            style={{textAlign: 'left',marginTop:50,marginLeft:20,fontSize:10}}>Query  </Text>
            <Text  
            style={{textAlign: 'left',marginTop:30,marginLeft:5}}>Database</Text>
            <View style={{marginTop:20,margin:10,height:40,width:100,fontSize:5}}>
            <Button
              title="Instacart"
              fontSize="5"
              onPress={() => Alert.alert(this.state.value)}
            />
            
            </View>


            
            <View style={{flexDirection: 'row',marginLeft:5}}>
                
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.rbWrapper}>
							<Text style={styles.textStyle}>{res.text}</Text>
							<TouchableOpacity
								style={styles.rbStyle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selected} />}
							</TouchableOpacity>
						</View>
					);
				})}

                <Text> Selected values: {this.state.value}</Text>
			</View>
            
            
               
            <StatusBar style="{auto" />
          
          </View>
          <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          />
          </View>
          </View>
        );







			
		
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      subContainer:{
      
        marginTop:0,
        height:800,
        width:400,
        borderColor: "black",
        
      },
    
      radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 0,
        marginTop:0
      },
      radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
      },
      radioButtonText: {
        fontSize: 16,
        marginLeft: 16
      },
    
      input: {
        height: 300,
        margin: 12,
        marginTop:0,
        borderWidth: 1,
        padding: 10,
      },

	rbWrapper: {
        marginBottom: 2,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'center',
	},
    textStyle: {
        marginRight: 5,
        marginLeft:5,
        marginTop:30,
        fontSize: 10,
        color: '#444',
        fontWeight: '700'
    },
	rbStyle: {
        flexDirection: 'column',
		height: 20,
		width: 20,
        marginLeft:5,
        marginTop:30,
		borderRadius: 110,
		borderWidth: 2,
		borderColor: '#2750aa',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selected: {
		width: 16,
		height: 16,
		borderRadius: 55,
		backgroundColor: 'red',
    },
    result: {
        marginTop: 22,
        color: 'white',
        fontWeight: '600',
        backgroundColor: 'blue',
    },
});