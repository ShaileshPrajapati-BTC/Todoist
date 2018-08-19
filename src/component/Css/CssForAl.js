import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container:{
        flex : 1
    },
    row:{
        backgroundColor : "#dfe4ea",
        flexDirection:'row',
        margin:10,
        padding:15,  
        borderRadius:5,
    },
    title:{
         fontSize :23,
         color: '#4A90E2',
         fontStyle: "normal",
         fontWeight :"bold",
        color: "black",
        fontWeight:'bold',
        justifyContent:'center',
        alignSelf:'center'
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
        bottom: 50,
    },
    FloatingButtonStyle: {
        backgroundColor:"transparent",
        resizeMode: 'contain',
        width: 50,
        height: 50,
      },
    trash_Icon: {
        // alignSelf: "flex-end",
        // justifyContent : 'flex-end',
        right :10,
        // alignSelf:"",
        marginRight:10,
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    drawerImage:{
        height:300,
        width : 300,
            
    }

    
});