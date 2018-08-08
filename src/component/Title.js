import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "./Css/CssForAl"



export class Title extends Component {
  constructor(props){
    super(props);
}
  
  render() {
    return (
      <View>
        <Text style={styles.title}> {this.props.title} </Text>
      </View>
    )
  }
}

export default Title