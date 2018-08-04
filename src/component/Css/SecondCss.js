import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions } from 'react-native'
import { Left } from 'native-base';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1c40f',
        borderWidth:1
    },
    titleView:{
        flex:1,
        height:50,
        alignItems:'center',
            
     },
    titleText:{
        marginLeft:20,
        marginRight:20,
        fontWeight:'bold', 
        backgroundColor:'transparent',
        paddingLeft : 20,
        fontSize:25,
        borderWidth:1
        
    },
    noteText:{
        marginRight:20,
        fontWeight:'bold', 
        backgroundColor:'transparent',
        paddingLeft:10,
        borderRadius:10,
        fontSize:20,
        height:50,
        width:150,
        
    },
    noteFrameOutside:{
      
    },
    noteFrameInside:{
        flex:1,
        flexDirection:'row',
        margin:15,
        borderWidth:1,
        backgroundColor:'#ecf0f1'
    },
    checkboxView:{
        margin:15,
    },
    addButton:{
        borderWidth:1,
        margin:20,
        right:0,
        alignItems:'center',
        justifyContent:'center',
        fontSize:50,
        backgroundColor:'#3498db',
        color:"blue",
        height:40
    },
    buttonText:{
        fontSize:15,
        color:"#ffffff",
        fontWeight:'bold'
    },
    noteView:{
        padding:10,

    }
});