import React, { Component } from 'react'
import {  Text ,View,Image ,FlatList,TouchableOpacity,RefreshControl } from 'react-native'
import ListItem from './List'
import styles from './Css/CssForAl'
import NoteTitle from '../Database/NoteTitle'
import Note from '../Database/Note'
import {Content} from 'native-base'

const data = require('./JSON/Data.json');
const Realm = require('realm')


export class MainList extends Component {
    constructor(props){
        super(props);
        this.state = {
            // AllList :[],

            refreshing :false
            // subTitle :''
      
          };
          this

    }


     
    // componentDidMount(){
    //   console.log(" Did Mount")

    // }
    

    // componentDidUpdate(){
    //   console.log(" Did update")
    // }
    // componentWillUnmount(){
    //   console.log(" will unMount")
    // }

    


  render() {

    // console.log(this.props.list.item.notes)
    return (
     
      (this.props.list.length > 0)?  
              
              <FlatList
                data = {this.props.list}
                extraData ={this.props.list}
                keyExtractor = {item => {item.id}} 
                renderItem ={(item) =>  <ListItem list={item} onPress={this.props.onPress} onRefresh={this.props.onRefresh} /> }
                inverted ={ true} 
                // onRefresh = {this.props.onRefresh()}              
                // refreshing = {this.props.refreshing}
                scrollEnabled ={true}
         
                />
      :
              <Text> Data not found</Text> 
    )
  }
}

export default MainList 