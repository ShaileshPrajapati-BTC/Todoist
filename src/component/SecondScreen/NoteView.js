import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import { CheckBox, Button,Icon } from 'native-base';
import { IconButton } from '../IconButton';


export class NoteView extends Component {
    constructor(props){
        super(props);
    }
    
    render() {/* 
      */
   return (
/*      style={{borderWidth:1,height:60,backgroundColor:'red' }} */
      <View style={{flex:1,flexDirection:'row'}}   key={this.props.key}>
            <CheckBox style={this.props.style.checkboxView} checked={false}/>
            <TextInput style={this.props.style.noteText} placeholder="Enter Notes" multiline={true}/>
            <IconButton name="close" />
      </View>
    )
  }
}

export default NoteView