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
import Login from './pages/LoginComponent'
import InboxListing from './pages/InboxList'
import ListDetails from './pages/ListDetails'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const RootStack = createStackNavigator({
  Login: {
    path: '/login',
    screen: Login
  },
  InboxListing: {
    path: '/InboxListing',
    screen: InboxListing
  },
  ListDetails: {
    path: '/ListDetails',
    screen: ListDetails
  }
});

export default class App extends Component {


  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RootStack />
      </Provider>
    );
  }
}

