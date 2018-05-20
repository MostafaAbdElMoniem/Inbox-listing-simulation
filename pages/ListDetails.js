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
  View, Image, Icon
} from 'react-native';


export default class ListDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.img}>
              <Image style={{
                width: 42.66,
                height: 42.66,
                margin: 10
              }}
                source={{ uri: this.props.navigation.state.params.imgUrl }}
              />
            </View>
            <View style={styles.ID}>
              <Text style={{
                textAlign: 'right',
                color: '#666666',
                fontSize: 10,
                margin: 10
              }} >{this.props.navigation.state.params.destinationId}</Text>
            </View>
          </View>

          <View style={styles.line}></View>
          <View >
            <Text style={{
              textAlign: 'left',
              color: '#666666',
              fontSize: 15,
              margin: 10
            }}>{this.props.navigation.state.params.title}</Text>
            <Text style={{
              textAlign: 'left',
              color: '#666666',
              fontSize: 10,
              margin: 10
            }}>{this.props.navigation.state.params.description.text}</Text>
            <View style={{ alignItems: 'center' }}>
              <Image style={{
                width: 300,
                height: 200,
                margin: 10
              }}
                source={{ uri: this.props.navigation.state.params.description.fullImg }}
              />
            </View>

          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={{
              textAlign: 'left',
              color: '#666666',
              fontSize: 13,
              margin: 10
            }}>{this.props.navigation.state.params.date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  line: {
    backgroundColor: '#eee',
    height: 2,
    marginTop: 5,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 0.5,
    flex: 1,
    borderColor: '#d6d7da',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  img: {
    flex: 0.5
  },
  ID: {
    flex: 0.5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
