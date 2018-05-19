/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,Image,
    View
} from 'react-native';
import DrawerNavigation from '../appNavigation'

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Image
                source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
                style={{ width: 30, height: 30, borderRadius: 15 }}
            />
        )
    }

    render() {
        return (
            <View>
                <Text>Welcome Home</Text>
            </View>
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
