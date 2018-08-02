import React, { Component } from 'react'
import { TouchableOpacity,View ,Text } from 'react-native'
import styles from "./Css/CssForAl"
import Title from './Title'
import SubTitle from './SubTitle'

export class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title :'',
            subtitle : '',
        };
    }

  render() {
    return (
        <TouchableOpacity style ={styles.row}>
            <View>
                <Title style ={styles.row}>Hello </Title>
                <SubTitle > hello</SubTitle>
            </View>
        </TouchableOpacity>
        
    )
  }
}

export default ListItem