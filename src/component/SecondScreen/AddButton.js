 import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import styles from '../Css/CssForAl' 

export class AddButton extends Component {
  render() {
    return (
      <View>
          <TouchableOpacity
            style = {styles.addButton}
            />
      </View>
    )
  }
}

export default AddButton