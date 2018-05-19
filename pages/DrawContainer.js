import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {NavigationActions,withNavigation} from 'react-navigation'

export default class DrawerContainer extends React.Component {

  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'login' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container} ref={(ref) => { this.drawer = ref; }}>
        <Text
          onPress={() => {
           navigation.navigate('Home')
        }}
          style={styles.uglyDrawerItem}>
         Home
        </Text>
        <Text
          onPress={() => navigation.navigate('InboxList')}
          style={styles.uglyDrawerItem}>
          InboxList
        </Text>
        <Text
          onPress={this.logout}
          style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})