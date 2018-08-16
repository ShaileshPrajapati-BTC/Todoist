import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import { CheckBox, Button,Icon,ListItem } from 'native-base';
import { IconButton } from '../IconButton';



export class NoteView extends Component {
    constructor(props){
        super(props);
        this.state={
            note:props.value,
            status:true,
            id : this.props.id,
            key : props.key
            // note : this.props.value,
        }

    }

    

    // componentWillReceiveProps(){
    //     nextProps =>{
    //         this.setState
    //             ({note:nextProps.value})
    //     }
    // }

   
    dataTransfer = (text) => {
        this.setState({
          state : text,  
        })
    }

    //    a = ()=>{
    //         this.state.status=false,
    //         this.state.note =''
    //    }
    //    b= ()=>{
    //         this.state.status=true,
    //         this.state.note = this.state.note;
    //    }
    

    

    render() {
        console.log("=================",this.props.id)
    return (

/*      style={{borderWidth:1,height:60,backgroundColor:'red' }} */
      <ListItem key={this.state.key}>
            <CheckBox 
                style={this.props.style.checkboxView} 
                checked={this.state.status}
                />
            <TextInput 
                style={this.props.style.noteText} 
                placeholder="Enter Notes"
                multiline={true} 
                // onChange ={this.props.onChange}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ge(this.state.note)}
                onChangeText ={(text) => {this.props.onChangeText(text,this.props.id)}}
                // onChange ={() => this.setState({note : this.note})}

                // onChangeText = {this.dataTransfer}
                // onChangeText={this.props.onChangeText(this.state.note,this.state.key)}                                       
                // onChangeText={this.props.onChangeText =(text) => {this.setState({note:text}/* ,this.props.onChangeText(text) */)}}
                // value ={this.state.note}

                // onChangeText={(text) => {  this.setState({value:text}),this.props.note=text} }
                // onChangeText={(va) => {  } }
                
                // value= {this.props.value}
                // onChange={this.setNote}
                // onPress ={ () => {this.props.onPress(this.state.note)}}
                // onChangeText=

                >{this.state.note}</TextInput>
            <IconButton 
                name="add" 
                onPress={() => {this.props.onPress(this.state.note)}}
                />
      </ListItem>
    )
  }
}

export default NoteView