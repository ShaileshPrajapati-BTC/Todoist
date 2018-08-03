import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import design from '../Css/SecondCss'

export class ButtonStyle extends Component {
    constructor(props){
        super(props) 
    }
  render() {
    return (
      <View>
          <Button style={design.addButton} ><Text style={design.buttonText}>{this.props.name}</Text></Button>
      </View>
    )
  }
}

export default ButtonStyle