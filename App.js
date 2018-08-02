/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text} from 'react-native';
import MainList from './src/component/MainList'


export default class App extends Component {
  render() {
    return (
      <View>
        <MainList />
        
      </View>
    );
  }
}