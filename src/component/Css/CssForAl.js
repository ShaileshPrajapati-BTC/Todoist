import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container:{
        flex : 1
    },
    row:{
        backgroundColor : "#dfe4ea",
        margin:10,
        borderRadius:5,
    },
    title:{
        paddingTop :10,
         fontSize :20,
         paddingLeft : 20,
         fontStyle: "normal",
         fontWeight :"bold",
        color: "black"
    },
    subTitle:{
        paddingTop:5,
        paddingBottom : 10,
        fontSize:15,
        paddingLeft:20,
        color:"black"
    },
    addButton:{
        borderRadius:50,
        paddingTop:30,
        height :40,
        width:40,
        backgroundColor:"#0652DD",
           
    },
    headerStyle:{
        flex:1,
        height:60,
        position:'absolute',
        borderWidth:1,
        height:80,
        backgroundColor:"#dcdde1",
        flexDirection :'row',
    },
    mainTitle :{
        width:60,
        padding:10,
        borderWidth:1,
        alignContent:"center",
        justifyContent:'center',
    },
    TouchableOpacityStyle:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 50,
        bottom: 100,
      },
      FloatingButtonStyle: {
  
        resizeMode: 'contain',
        width: 50,
        height: 50,
      }
    

    
});