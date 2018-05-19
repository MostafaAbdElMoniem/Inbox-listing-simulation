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
    View,
    Image,TouchableHighlight
} from 'react-native';

export default class Splash extends Component {

    render() {
        return (
                <TouchableHighlight  style={styles.container} onPress={() => {
                    this.props.navigation.navigate('Login')
                }}>
                    <Image style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                    }}
                        source={{ uri: 'https://pbs.twimg.com/media/Dba4Pc6WsAArLFB.jpg:small' }}
                    />
                </TouchableHighlight >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
