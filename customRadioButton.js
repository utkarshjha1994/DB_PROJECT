import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text, ScrollView } from "react-native";
import { Button, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import {getDbInstance} from './handler';

export default class CustomRadioButton extends Component {
  dbInstance = null;
 
 // tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9']
 state = {
    radioButton: null,
    result :[] ,
    text : null,
    database:"Instacart",
    
    HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
    DataTable: [
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '4', '5']
    ],

    tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5'],
      widthArr: [180, 180, 180, 180, 180],
      data: []
  }; 

 
   executeQuery = async() => {
    const handlerType = this.state.radioButton;
    const databaseName = this.state.database;
    let result = null;
    
    if (!handlerType || !databaseName) {
      alert("Please select a handler and database");
      return result;
    }
    if (this.dbInstance && this.dbInstance.getName() != handlerType) {
      this.dbInstance = getDbInstance(handlerType, databaseName)
    }
    if (!this.dbInstance) {
      this.dbInstance = getDbInstance(handlerType, databaseName);
    }
    console.log(this.state.database);
    console.log(this.state.radioButton);
    try{
      console.log(this.state.database)
      result = await this.dbInstance.executeQuery(this.state.query, this.state.database);
    }
    catch(err){
      alert("Error: "+result.sqlMessage);
    }
    finally{
      return result;
    }
    
   // console.log(result)
   //this.state.result .then( this.setState({}));
    //alert(res)
  }   


  render() {
    const { PROP } = this.props;
    let data = this.state.data
    return (
      <View style={styles.container }>
        <View style={styles.subContainer}>
          <View style={{ flexDirection: "row",marginLeft:"0%",marginTop: "5%" }}>
            
           <View
           style ={{marginLeft:"5%"}}>
            <View
              style={{
                marginTop:"5%",
                height: 40,
                width: "100%",
                fontSize: 5,
              }}
            >
              <Button 

                title="Instacart"
                fontSize="5"
                onPress={ () => {
                  this.state.database="Instacart"
                  this.setState({})
                }
                } />
              
            </View>
            <View
              style={{marginTop:"0%",width: "100%"}}>
              <Button
                color="purple"
                title="ABC"
                fontSize="5"
                onPress={ () => {
                  this.state.database="ABCRetail_N"
                  this.setState({})
                }
                } />
              </View>
              </View>

            <View style={{ flexDirection: "row", marginLeft: "1%",marginBottom:"5%", justifyContent:"center", alignItems: "baseline" }}>
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
          <Text
              style={{
                textAlign: "left",
                marginTop:"2%",
                marginBottom:"0%",
                marginLeft: "5%",
                fontSize: 20,
                
              }}
            >
              Database selected: {this.state.database}
            </Text>  
            <Text
              style={{
                textAlign: "left",
                marginTop: "5%",
                marginLeft: "5%",
                fontSize: 15,
              }}
            >
              Query{": "}
            </Text>
                    
            <TextInput style={styles.input}  multiline={true} numberOfLines={4} value={this.state.query} onChangeText = {(query) => {
            this.setState({query});
            console.log(query);
          }}/>

          <View style={{ flexDirection: "row"}}>
            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                margin: "3%",
                marginRight:"2%",
                height: "50%",
                width: "30%",
                fontSize: 5,
              }}
            >
              <Button
                title="run"
                fontSize="5"
                color="black"
                onPress= { async () => {
                  var result = await this.executeQuery()
                  console.log(result)
                  if (result === null) {
                    return;
                  }
                  const value = Object.values(result)
                  console.log("values are" + value)
           try{
            
                  var val = value[0]                 
                  console.log(value[0])
                  this.state.text = value[2]
                  var ct = []
                  var v = []
                  console.log("b")
                  var header = null
                  for(var ob of val){
                    console.log("d  ")
                    var row = Object.values(ob)
                     header = Object.keys(ob)
                  
                    
                    ct.push(row)
                  }
                  console.log("c")
                  var head = []
                  for(var i = 0;i<header.length;i++){
                    head.push(220)
                  }
                  this.state.widthArr = head
                  

                  console.log(result)
                  v.push(header)
                  this.state.tableHead = header
                  this.state.data = ct
                  this.setState({})
                }
                catch(err){
                  try{
                    console.log(result)
                    let error = result.error.sqlMessage || result.error.code
                    alert(error);
                    this.state.data=[]
                    this.state.tableHead = []
                    this.state.widthArr = []
                    this.state.text = null
                    this.setState({})
                  }
                  catch(err){
                    alert("error is " + err);
                  }
                }
                  }
              }
              />
               
              <Button
                color="red"
                title="Delete"
                fontSize="5"
                onPress={ () => {
                  this.state.query=null
                  this.setState({})
                }
                }
              />
            </View>
            
            <Text style={{ marginTop: "7%", marginLeft: "10%", fontSize: 15}}>
              {" "}
              Time Elapsed :{this.state.text}
            </Text>
          </View>
          
          <ScrollView horizontal={true}>
          <View>
            <Table Style={{"borderWidth":"5%", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
              <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.head} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table Style={{"borderWidth":2, 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={this.state.widthArr}
                      style={{border: "3px solid rgb(0, 0, 0)"}}
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
    marginTop: "10%",
    height: "100%",
    width: "100%",
    borderColor: "black",
  },

  scrollView: {
    backgroundColor: 'grey',
    marginLeft: 0,
    marginTop:1
  },

  input: {
    height: "30%",
    marginTop: "5%",
    margin: "2%",
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
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: "30%",
    fontSize: 10,
    color: "#444",
    fontWeight: "700",
  },
  rbStyle: {
    flexDirection: "column",
    height: 20,
    width: 20,
    marginLeft: "5%",
    marginTop: "30%",
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
  text:{margin: 6}
});