import React, { Component } from 'react'
import {  Text, View,Image ,FlatList,TouchableOpacity} from 'react-native'
import ListItem from './List'
import styles from './Css/CssForAl'
const data = require('./JSON/Data.json');



export class MainList extends Component {
  render() {
    return (
        <View style={{backgroundColor:'#a4b0be'}}>
            <FlatList
                data = {data.Users}
                renderItem ={({item}) =>  <ListItem  /> }
                    />
            <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style = { styles.TouchableOpacityStyle } 
                >
                    
                    <Image
                    source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                    style = { styles.FloatingButtonStyle }
                    />
                
            </TouchableOpacity>
        </View>
         
    )
  }
}

export default MainList 