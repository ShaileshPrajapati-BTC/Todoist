import React, { Component } from 'react'
import {  Text,Content ,View,Image ,FlatList,TouchableOpacity,RefreshControl } from 'react-native'
import ListItem from './List'
import styles from './Css/CssForAl'
import NoteTitle from '../Database/NoteTitle'
import Note from '../Database/Note'

const data = require('./JSON/Data.json');
const Realm = require('realm')


export class MainList extends Component {
    constructor(props){
        super(props);
        this.state = {
            AllList :'',

            refreshing :false
            // subTitle :''
      
          };
    }


    componentWillMount(){
        this.connectionData();
    }

    connectionData =() => {
        this.setState({refreshing : true})
        Realm.open({
            schema:[ NoteTitle,Note]
            }).then(realm => {
              realm.write(() =>{
              // alert(Realm.defaultPath); 
              let  List = realm.objects('Title_Demo');
             this.setState({
                AllList :List,
                refreshing:false
            });

            });
          }).catch(error => {
            alert(error);
            
          });
    }
  render() {
    return (
        <View
        >
            {/* (this.state.AllList.length > 0? */}
                <FlatList
                        data = {this.state.AllList}
                        keyExtractor = {item => item.id}
                        renderItem ={({item}) =>  <ListItem list={item.title} /> }
                        refreshControl = {
                            <RefreshControl
                                refreshing = {this.state.refreshing} 
                                onRefresh = {this.connectionData}
                            />
                        } 
                        />
                {/* :alert("Data not Found")
            } */}
           
        </View>
         
    )
  }
}

export default MainList 