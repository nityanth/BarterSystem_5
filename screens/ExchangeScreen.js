import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends Component{
    constructor(){
        super(),
        this.state={
            userId:firebase.auth().currentUser.email,
            itemName: "",
            reasonToRequest:""

        }
    }
    createUniqueId(){ return Math.random().toString(36).substring(7); }

    addItem = (itemName,reasonToRequest)=>{
        var randomRequestId = this.createUniqueId()
        db.collection("requested_items").add({
            user_id:this.state.userId,
             item_name:this.state.itemName,
             reason_to_request:this.state.reasonToRequest,
             request_id : randomRequestId
          })
          return(Alert.alert("Item Added Successfully"))
    }

    
  render(){
      return(
          <View style = {{flex:1}}>
              <MyHeader title = "Add Item"/>
        <KeyboardAvoidingView style= {styles.keyBoardStyle}>
        
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Enter Item Name"}
          onChangeText={(text)=>{
            this.setState({
    itemName: text
            })

          }}
          value = {this.state.item}
        />

<TextInput
          style={[styles.formTextInput,{height:300}]}
          multiline
          numberOfLines = {8}
          placeholder ={"Enter Reason To Request"}
          onChangeText={(text)=>{
            this.setState({
              reasonToRequest: text
            })

          }}
          value = {this.state.reasonToRequest}
        />
        <TouchableOpacity
            style={styles.button}
            onPress = {()=>{this.addItem(this.state.itemName, this.state.reasonToRequest)}}
            >
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
          </View>
      )
  }

}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
