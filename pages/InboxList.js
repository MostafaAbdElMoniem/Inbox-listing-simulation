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
  View,Image,
  Button,TouchableOpacity,ScrollView
} from 'react-native';



export default class InboxListing extends Component {
  static navigationOptions = {
    drawerLabel: 'Inbox Listing',
    drawerIcon: () => (
        <Image
            source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
            style={{ width: 30, height: 30, borderRadius: 15 }}
        />
    )
}
  constructor(props) {
    super(props);
    this.state = {
      inboxList: [
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '1',
          description: {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
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
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '5',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: 'First title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '6',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '2nd title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '7',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '3rd title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '8',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '4th title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '9',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: 'First title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '10',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '2nd title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '11',
          description: {
            text: 'here is some dummy description',
            fullImg: 'https://www.inbox.com/Server/img/img-screenshot.png'
          },
          date: '25 May 2018',
          title: '3rd title to test',
        },
        {
          imgUrl: 'https://cdn.iconscout.com/public/images/icon/free/png-512/inbox-google-logo-3e01c6fc71a82672-512x512.png',
          destinationId: '12',
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
      return <TouchableOpacity key={elm.id} style={styles.element} onPress={this.setRejectionID.bind(this, elm)}>
        <View style={styles.elmContentWrapper}>
          <View style={styles.imgContainer}>
            <Image style={styles.img}
              source={{ uri: elm.imgUrl }}
            />
          </View>
          <View>
            <Text numberOfLines={1} ellipsizeMode='tail'>{elm.title}</Text>
            <View style={styles.descriptionWrapper}>
              <Text>{ ((elm.description.text).length > 30) ? 
    (((elm.description.text).substring(0,30-3)) + '...') : 
    elm.description.text }</Text>
            </View>
            <Text>{elm.date}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </TouchableOpacity>
    });

    return (
      <ScrollView style={styles.container}>

        {listItems}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10
  },
  element: {
    padding: 12,
    paddingTop: 10,
    paddingBottom: 0
  },
  line: {
    backgroundColor: '#eee',
    height: 1.5,
    marginTop: 10,
    flexDirection: 'row'
  },
  img: {
    width: 42.66,
    height: 42.66,
    margin: 10,
    marginLeft: 0
  },
  elmContentWrapper: {
    flexDirection: 'row'
  },
  imgContainer: {
    justifyContent: 'center'
  },
  descriptionWrapper: {
    paddingRight: 15
  }
});
