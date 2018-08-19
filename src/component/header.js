import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Header,Left,Button,Body,Right,Title,Icon} from 'native-base';
import {StackNavigator,navigation} from 'react-navigation'
import { IconButton } from './IconButton';

export class Allheader extends Component {
    constructor(props){
        super(props);
      } 
      
  render() {
    return (
    <Header>
        <Left>             
            <IconButton onPress={() =>  this.props.onPress.navigate('DrawerOpen')} name="menu"  />
        </Left>
        <Body>
            <Title>Home</Title>
        </Body>
        <Right>
            {/* <IconButton name="add" onPress={() => this.props.navigateEvent.navigate('Form')} /> */}
        </Right>
    </Header>
    )
  }
}

export default Allheader