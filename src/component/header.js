import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Header,Left,Button,Body,Right,Title,Icon} from 'native-base';
import {StackNavigator} from 'react-navigation'

export class Allheader extends Component {
    constructor(props){
        super(props)
      } 
  render() {
    return (
        <Header>
        <Left>
            <Button transparent>
                <Icon name="menu"/>
            </Button>
        </Left>
        <Body>
            <Title>Hello</Title>
        </Body>
        <Right>
            <Button transparent onPress={() => this.props.navigateEvent.navigate('Form')}>
               <Icon name="add" />
            </Button>
        </Right>
    </Header>
    )
  }
}

export default Allheader