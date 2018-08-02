import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "../component/Css/CssForAl"

export class Title extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}> textInComponent </Text>
      </View>
    )
  }
}

export default Title