import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "../component/Css/CssForAl"

export default class SubTitle extends Component {
  render() {
    return (
      <View>
        <Text style={styles.subTitle}> textInComponent </Text>
      </View>
    )
  }
}