import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import { CheckBox, Button,Icon } from 'native-base';
import { IconButton } from '../IconButton';


export class NoteView extends Component {
    constructor(props){
        super(props);
        this.state={
            note:props.value,
            status:true,
            key : props.key,
            // note : this.props.value,
        }

    }

    // componentWillReceiveProps(){
    //     nextProps =>{
    //         this.setState
    //             ({note:nextProps.value})
    //     }
    // }

   
    // dataTransfer = (note) => {
    //     this.props.notes.push({
    //         note : this.state.note
    //     })

    // }

    //    a = ()=>{
    //         this.state.status=false,
    //         this.state.note =''
    //    }
    //    b= ()=>{
    //         this.state.status=true,
    //         this.state.note = this.state.note;
    //    }
    
s
    

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

                // onChangeText = {this.props.onChangeText}
                onChangeText = {this.props.onChangeText}
                // onChangeText={this.props.onChangeText(this.state.note,this.state.key)}
                // onChangeText={this.props.onChangeText =(text) => {this.setState({note:text}/* ,this.props.onChangeText(text) */)}}
                // value ={this.state.note}

                // onChange ={this.props.onChange(this.state.note)}
                // onChangeText={(text) => {  this.setState({value:text}),this.props.note=text} }
                // onChangeText={(va) => {  } }
                
                value= {this.props.value}
                // onChange={this.setNote}
                // onPress ={ () => {this.props.onPress(this.state.note)}}
                // onChangeText=

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