/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text,createStackNavigator} from 'react-native';
import {DrawerNavigator} from 'react-navigation'
import  HomeScreen  from './src/component/HomeScreen';
import CreateForm from './src/component/SecondScreen/CreateForm'
import Navigation from './src/component/AllNavigation'

export default class App extends Component {
  render() {
    return (
        <Navigation />  
    );  
  }
}
/* 
const MyApp = createStackNavigator("Home",{
  Home: HomeScreen,
  Form: CreateForm
  },
  {
    InitialRouteName : 'Home',
  }
); */
