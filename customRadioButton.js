import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Alert,SafeAreaView,ScrollView } from "react-native";
import { Button, TextInput, AppState } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import {getDbInstance} from './handler';

export default class CustomRadioButton extends Component {
  dbInstance = null;
 state = {
    radioButton: null,
    
    HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
    DataTable: [
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '4', '5']
    ],

    tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [80, 80, 80, 80, 80, 80, 80, 80, 80]
  }; 

 /* constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
      DataTable: [
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5']
      ]
    }
  } */
 /* executeQuery() {
    const handlerType = this.state.radioButton;
    this.dbInstance = getDbInstance(handlerType)
    this.dbInstance.executeQuery(this.state.query)
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  
  componentWillUnmount() {
    AppState.remove('change', this.handleAppStateChange);
  }
  handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'inactive') {
      console.log('the app is closed');
      if (this.dbInstance) {
        this.dbInstance.closeConnection();
      }
    }   
  }*/

  render() {
    const { PROP } = this.props;
    const data = [];
    for (let i = 0; i < 30; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 9; j += 1) {
        dataRow.push(`${i}${j}`);
      }
      data.push(dataRow);
    }
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textAlign: "left",
                marginTop: 50,
                marginLeft: 20,
                fontSize: 10,
              }}
            >
              Query{" "}
            </Text>
            <Text style={{ textAlign: "left", marginTop: 30, marginLeft: 5 }}>
              Database
            </Text>
            <View
              style={{
                marginTop: 20,
                margin: 10,
                height: 40,
                width: 100,
                fontSize: 5,
              }}
            >
              <Button
                title="Instacart"
                fontSize="5"
                onPress={() => alert(this.state.radioButton)}
              />
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5,marginBottom:10, justifyContent:"center", alignItems: "baseline" }}>
              {PROP.map((res) => {
                return (
                  <View key={res.key} style={styles.rbWrapper}>
                    <Text style={styles.textStyle}>{res.text}</Text>
                    <TouchableOpacity
                      style={styles.rbStyle}
                      onPress={() => {
                        this.setState({
                          radioButton: res.key,
                        });
                      }}
                    >
                      {this.state.radioButton === res.key && <View style={styles.selected} />}
                    </TouchableOpacity>
                  </View>
                );
              })}

            </View>

            <StatusBar style="{auto" />
          </View>
          <TextInput style={styles.input} multiline={true} numberOfLines={4} value={this.state.query} onChangeText = {(query) => {
            this.setState({query});
            console.log(query);
          }}/>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginTop: 20,
                margin: 10,
                height: 40,
                width: 100,
                fontSize: 5,
              }}
            >
              <Button
                title="run"
                fontSize="5"
                onPress={() => {
                  alert(this.state.DataTable + "  " + this.state.radioButton);                         
                  this.executeQuery(this.setState);
                }
              }
              />
            </View>
            <Text style={{ marginTop: 25, marginLeft: 100, fontSize: 15 }}>
              {" "}
              Time Elapsed
            </Text>
          </View>
          
          <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.head} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={this.state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    marginTop: 0,
    height: 800,
    width: 400,
    borderColor: "black",
  },

  scrollView: {
    backgroundColor: 'grey',
    marginLeft: 0,
    marginTop:1
  },

  input: {
    height: 300,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
  },

  rbWrapper: {
    marginBottom: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  textStyle: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 30,
    fontSize: 10,
    color: "#444",
    fontWeight: "700",
  },
  rbStyle: {
    flexDirection: "column",
    height: 20,
    width: 20,
    marginLeft: 5,
    marginTop: 30,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "#2750aa",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    width: 16,
    height: 16,
    borderRadius: 55,
    backgroundColor: "red",
  },
  dataWrapper: { 
    marginTop: -1 
  },
  head: { 
    height: 50, 
    backgroundColor: '#6F7BD9' 
  },
  result: {
    marginTop: 22,
    color: "white",
    fontWeight: "600",
    backgroundColor: "blue",
  },
});