import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'
import { Left } from 'native-base';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff5e57',

    },
    input:{
        borderWidth:1,
        fontWeight:'bold',
        backgroundColor:'transparent',
        padding : 10,
        margin:10,
        borderRadius:10,
        fontSize:15,
        marginLeft:30,
        marginRight:30,
    },
    titleView:{
        height:100,
        width:100,
        borderWidth:1,
        flexDirection:'row',
        
    },
    addButton:{
        marginTop:30,
        marginRight:30,
        padding :20,
        alignSelf:'flex-end',
        borderRadius:10,
        fontSize:50,
        color:"#ffffff"
    },
    buttonText:{
        color:"#ffffff",
        fontWeight:'bold'
    }
});