import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import design from '../Css/SecondCss'

export class TextFiels extends Component {
    constructor(props){
        super(props);
    }

    render() {
    return (
        <View>
            <TextInput 
                style={design.input}
                placeholder ={this.props.placeholder}
            />

        </View>
    )
  }
}

export default TextFiels