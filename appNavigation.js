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
import { Icon } from 'react-native-elements';
import {DrawerActions, StackActions, createDrawerNavigator, createStackNavigator, withNavigation,
     DrawerItems, SafeAreaView, NavigationActions} from 'react-navigation'
import Login from './pages/LoginComponent'
import InboxListing from './pages/InboxList'
import ListDetails from './pages/ListDetails'
import Splash from './pages/splash'
import DrawerContainer from './pages/DrawContainer'


// drawer stack
const DrawerStack = createDrawerNavigator(
    {
       
        InboxListing: { screen: InboxListing },

    }
    , {

        gesturesEnabled: false,
        contentComponent: DrawerContainer,
        headerMode: 'float',
    }
)

const DrawerNavigation = createStackNavigator({
    DrawerStack: { screen: DrawerStack },
    

}, {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            // headerStyle: { backgroundColor: 'green' },
            // title: 'Logged In to your app!',
            headerLeft: <Icon name="menu" size={35} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
        })
    })

// login stack
const LoginStack = createStackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login },
}, {
        headerMode: 'none',
        navigationOptions: {
            // headerStyle: { backgroundColor: 'red' },
            // title: 'You are not logged in'
        }
    })

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    loginStack: { screen: LoginStack },
    ListDetails: { screen: ListDetails },
    drawerStack: { screen: DrawerNavigation }
}, {
        // Default config for all screens
        headerMode: 'none',
        title: 'Main',
        initialRouteName: 'loginStack'
    })

export default class AppNavigation extends Component {


    render() {
        return (
            <PrimaryNav />
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
