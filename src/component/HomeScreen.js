import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MainList from './MainList'
import Allheader from './header'
import { Container,Drawer } from 'native-base';

export class HomeScreen extends Component {
 
  constructor(props){
    super(props)
  }  

  componentWillMount(){
    console.log(this.props)
  }
  render() {

    return (
    <Container>
        <Allheader  navigateEvent= {this.props.navigation} />
        <MainList />
    </Container>
    )
  }
}

export default HomeScreen