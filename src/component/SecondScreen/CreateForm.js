import React, { Component } from 'react'
import { Text, View ,TouchableOpacity } from 'react-native'
import TextField from './TextField'
import design from '../Css/SecondCss'
import ButtonStyle from "./ButtonStyle"

export class CreateForm extends Component {
  constructor(props){
    super(props)
  }
  render() {
    
    return (
        <View style={design.container}>
            <ButtonStyle name="Add Reminder"/>
            <TextField  placeholder="Enter title here"/> 
        </View>

    )
  }
}

export default CreateForm 