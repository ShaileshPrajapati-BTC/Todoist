import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "./Css/CssForAl"

export default class SubTitle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      <View>
        <Text style={styles.subTitle} > {this.props.sub.note} </Text>
      </View>
    )
  }
}