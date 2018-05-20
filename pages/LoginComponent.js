import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ImageBackground,
  Text
} from 'react-native';
import { Container, Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import FormComponent from './../components/FormComponent'

export default class Login extends Component {

  render() {
    return (

      <Container style={styles.container}>
        {/* <View> */}
        <ImageBackground source={require('./../images/crowd.jpg')}
          style={styles.backgroundImage}>
          <Text style={styles.mainTitle}>Welcome!</Text>
          <Text style={styles.longText}>We hope you enjoy the stay!</Text>
          <View style={styles.whiteBorder}></View>
          <Text style={styles.signInText}>Sign in</Text>
          <FormComponent style={styles.formContainer} isLogged={(flag) => {
            if (flag === true) {
              this.props.navigation.navigate('InboxListing');
            }
            else {
              alert("Wrong Username or password, please try again");
            }
          }} />
        </ImageBackground>
        {/* </View> */}
      </Container>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
  formContainer: {
    width: '80%',
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  longText: {
    color: '#FFFFFF',
    fontSize: 25,
    textAlign: 'center',
  },
  whiteBorder: {
    height: 3,
    width: 40,
    backgroundColor: '#FFFFFF',
    marginLeft: '45%',
    marginTop: 20,
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  }
});
