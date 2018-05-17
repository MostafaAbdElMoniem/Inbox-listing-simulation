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
  View, Image
} from 'react-native';


export default class ListDetails extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{
            flexDirection:'row'
          }}>
            <View style={styles.img}>
              <Image style={{
                width: 42.66,
                height: 42.66,
                margin: 10
              }}
                source={{ uri: 'https://o.aolcdn.com/images/dims?quality=100&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D4288%252C2847%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1063%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252F9e7cc7f3f6e88add80cf90f68811daf6%252F206133450%252Fthe-google-search-app-is-seen-on-an-android-portable-device-on-5-picture-id914593230%26client%3Da1acac3e1b3290917d92%26signature%3De62b317717dd90c09cc631b4e9e97357c936dae4&client=cbc79c14efcebee57402&signature=98950085d25d91a9ce207502eaef86ed0a8abe2e' }}
              />
            </View>
            <View style={styles.ID}>
              <Text style={{
                textAlign: 'right',
                color: '#666666',
                fontSize: 10,
                margin: 10
              }} >2352742645276</Text>
            </View>
          </View>

          <View style={styles.line}></View>
          <View >
            <Text  style={{
                textAlign: 'left',
                color: '#666666',
                fontSize: 15,
                margin: 10
              }}>Puedes disfrutar de nuestro servicio</Text>
              <Text style={{
                textAlign: 'left',
                color: '#666666',
                fontSize: 10,
                margin: 10
              }}>Con nuestro Servicio Posventa, si se te estropea tu móvil, nos comprometemos a arreglarlo en 5 días laborales y si no, te lo cambiamos por otro igual o mejor</Text>
              <View style={{alignItems:'center'}}>
              <Image style={{
                width: 300,
                height: 200,
                margin: 10
              }}
                source={{ uri: 'https://o.aolcdn.com/images/dims?quality=100&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D4288%252C2847%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1063%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252F9e7cc7f3f6e88add80cf90f68811daf6%252F206133450%252Fthe-google-search-app-is-seen-on-an-android-portable-device-on-5-picture-id914593230%26client%3Da1acac3e1b3290917d92%26signature%3De62b317717dd90c09cc631b4e9e97357c936dae4&client=cbc79c14efcebee57402&signature=98950085d25d91a9ce207502eaef86ed0a8abe2e' }}
              />
              </View>
              
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
    marginLeft:10,
    marginRight:10
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 0.5,
    flex:1,
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
