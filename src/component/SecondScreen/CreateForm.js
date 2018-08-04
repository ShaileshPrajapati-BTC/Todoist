import React, { Component } from 'react'
import { Text, View ,TouchableOpacity ,KeyboardAvoidingView} from 'react-native'
import TextField from './TextField'
import design from '../Css/SecondCss'
import ButtonStyle from "./ButtonStyle"
import { CheckBox } from 'native-base';

export class CreateForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    /* style={{margin:10,padding:20, right:0, position:'absolute'}} */
    return (
      <KeyboardAvoidingView style={design.container}>
          <View style={{height:80}}>
            <ButtonStyle style={[design.addButton ,design.buttonText]} title="Add Reminder"/>
          </View>
        
          <View style={{height:60}}>
            <TextField style={design.titleText} placeholder="Enter title here"/> 
          </View>

          <View style={{ flex: 1,borderRadius:20,backgroundColor:'#95a5a6', height:80,borderWidth:1,margin:20,padding:20}}>
            <View style={design.noteFrameInside}>

              <CheckBox style={design.checkboxView} checked={false}/>
              <TextField style={design.noteText} placeholder="Enter Notes"/>
            </View>
          </View>  
      </KeyboardAvoidingView>
    )
  }
}

export default CreateForm 