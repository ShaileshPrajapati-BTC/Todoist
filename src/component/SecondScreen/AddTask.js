import React, { Component } from 'react'
import { Button,Text, View } from 'react-native'
import AddButton from './AddButton'
import styles from '../Css/CssForAl' 

export class AddTask extends Component {
  render() {
    return (
        <View style={styles.container}>
            <AddButton />

            <View style={styles.container}>
                
            </View>
        
        </View>
    )
  }
}

export default AddTask