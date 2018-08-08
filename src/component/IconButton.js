import React, { Component } from 'react'
import {Text} from 'react-native'
import {Button,Icon} from 'native-base'

export class IconButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
        <Button transparent>
            <Icon 
                style={this.props.style}
                name={this.props.name} 
                onPress= {this.props.onPress}
                >{this.props.value}</Icon>
         </Button>
    )
  }
}

export default IconButton
