import React, { Component } from 'react'
import { Text, View,Button ,TouchableOpacity} from 'react-native'
import { Right } from 'native-base';

export class ButtonStyle extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
            <TouchableOpacity
              style = {this.props.style}
              title = {this.props.title}
                onPress = {this.props.onPress}
                >
                <Text>
                    {this.props.title}
                </Text>
              </TouchableOpacity>
      )
    }
}

export default ButtonStyle