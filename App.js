/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import AppNavigation from './appNavigation'



// const RootStack = createStackNavigator({
//   Login: {
//     path: '/login',
//     screen: Login
//   },
//   InboxListing: {
//     path: '/InboxListing',
//     screen: InboxListing
//   },
//   ListDetails: {
//     path: '/ListDetails',
//     screen: ListDetails
//   }
// });

export default class App extends Component {


  render() {
    return (
      <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
