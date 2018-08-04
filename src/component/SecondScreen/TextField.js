import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import design from '../Css/SecondCss'

export class TextFiels extends Component {
    constructor(props){
        super(props);
    }

    render() {
    return (
            <TextInput 
                style = {this.props.style}
                placeholder ={this.props.placeholder}
            />

    )
  }
}

export default TextFiels