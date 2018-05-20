import React from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import {
  StackActions, createDrawerNavigator, createStackNavigator, withNavigation
  , DrawerItems, SafeAreaView, NavigationActions
} from 'react-navigation'

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
      <View style={styles.container}>
        <Image source={{ uri: `https://www.seeklogo.net/wp-content/uploads/2013/06/vodafone-group-vector-logo-400x400.png` }}
          style={{ width: '100%', marginBottom: 50, height: 60, borderRadius: 15 }} />

        <Text
          onPress={() => navigation.navigate('InboxListing')}
          style={styles.uglyDrawerItem}>
          InboxList
        </Text>
        <Text
          onPress={() => {


            navigation.navigate('Login');
            // async function removeItem(item) {
            //   try {
            //     await AsyncStorage.removeItem(item);
            //   } catch (error) {
            //   }
            // }
            // async function getItem(item) {
            //   try {
            //     const value = await AsyncStorage.getItem(item);
            //     if (value) {
            //     }
            //   } catch (error) {
            //   }
            // }

            // getItem('username')
            // getItem('password')

          }}
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