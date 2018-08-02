import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container:{
        flex : 1
    },
    row:{
        backgroundColor : "#8c7ae6",
        borderWidth :1,
    },
    title:{
        paddingTop :10,
         fontSize :20,
         paddingLeft : 20,
         fontStyle: "normal",
         fontWeight :"bold",
        color: "#ffffff"
    },
    subTitle:{
        paddingTop:5,
        paddingBottom : 10,
        fontSize:15,
        paddingLeft:20,
    },
    addButton:{
        width :40,
        height :40,
        backgroundColor:"#0652DD"
           
    }
    
});