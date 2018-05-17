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
  Button,TouchableOpacity
} from 'react-native';



export default class InboxListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inboxList: [
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '1',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: 'First title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '2',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '2nd title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '3',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '3rd title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '4',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '4th title to test',
        }
      ]
    };

  }

  setRejectionID(elm) {
    this.props.navigation.navigate('ListDetails', elm)
  }

  render() {

    let listItems = this.state.inboxList.map((elm) => {
      return <TouchableOpacity key={elm.id} onPress={this.setRejectionID.bind(this, elm)}>
        <Text>{elm.title}</Text>
        <Text>{elm.description.text}</Text>
        <Text>{elm.date}</Text>
      </TouchableOpacity>
    });

    return (
      <View style={styles.container}>

        {listItems}
        {/* <Text>Mustafa</Text>

        <Button title="Go to Marwa" onPress={() => this.props.navigation.navigate('ListDetails')} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
