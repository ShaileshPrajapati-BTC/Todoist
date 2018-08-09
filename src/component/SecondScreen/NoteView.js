import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import { CheckBox, Button,Icon } from 'native-base';
import { IconButton } from '../IconButton';


export class NoteView extends Component {
    constructor(props){
        super(props);
        this.state={
            note:'',
            status:true,
        }

    }
       a = ()=>{
            this.state.status=false,
            this.state.note =''
       }
       b= ()=>{
            this.state.status=true,
            this.state.note = this.state.note;
       }
    
    render() {

    return (

/*      style={{borderWidth:1,height:60,backgroundColor:'red' }} */
      <View style={{flex:1,flexDirection:'row'}}   key={this.props.key}>
            <CheckBox 
                style={this.props.style.checkboxView} 
                checked={this.state.status}
                />
            <TextInput 
                style={this.props.style.noteText} 
                // text = {this.props.text}
                placeholder="Enter Notes"
                multiline={true} 
                onChangeText={(text) => this.setState({note:text}) } 
                />
            <IconButton 
                name="add" 
                onPress={() => {this.props.onPress(this.state.note)}}
                />
      </View>
    )
  }
}

export default NoteView