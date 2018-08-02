import React, { Component } from 'react'
import {  Text, View ,FlatList} from 'react-native'
import ListItem from './List'
const data = require('./JSON/Data.json');


export class MainList extends Component {
  render() {
    return (
        <View>
            <FlatList
                data = {data.Users}
                renderItem ={({item}) =>  <ListItem name= {item.name}/> }
                    />
        </View>
         
    )
  }
}

export default MainList 