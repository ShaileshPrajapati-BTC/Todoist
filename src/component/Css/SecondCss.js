import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions } from 'react-native'
import { Left } from 'native-base';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dfe4ea',

    },
    titleView:{
        flex:1,
        height:50,
        alignItems:'center',
     },
    titleText:{
        fontFamily:'Arial-BoldMT',
        marginLeft:20,
        marginRight:20,
        fontWeight:'bold', 
        backgroundColor:'transparent',
        paddingLeft : 20,
        fontSize:25,
        
    },
    noteText:{
        marginRight:20,
        fontWeight:'bold', 
        backgroundColor:'transparent',
        paddingLeft:10,
        borderRadius:10,
        fontSize:20,
        height:50,
        width:168,
    },
    noteFrameOutside:{ 
        flex: 1,
        borderRadius:20,
        backgroundColor:'#95a5a6', 
        margin:20,
        
    },
    noteFrameInside:{
        flex:1,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        backgroundColor:'#ecf0f1',
      
        
    },
    checkboxView:{
        margin:15,
    },
    addButton:{
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