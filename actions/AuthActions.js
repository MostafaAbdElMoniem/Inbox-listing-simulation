import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from './types'

import firebase from './../firebase';
import { AsyncStorage } from 'react-native';

export const loginUser = ({ username, password }) => {
    // call api here to authenticate user
    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMPT });
        //to allow user login and return token, user ID
        firebase.auth().signInAnonymously().
            then((response) => {
                const userId = response.uid;
                // to save user in asyncstorage 
                const user = {
                    id: userId,
                    username,
                    password
                };

                //to save data in firebase 
                // ref to set document in firebase contains users for each of them have a userId
                // and set put username, password in this document in firebase
                firebase.database().ref(`users/${userId}`)
                    .set({ username, password })
                    .then(() => finishLogin(dispatch, user));
            });
    }
}

const finishLogin = (dispatch, user) => {
    // save user info in AsyncStorage of name user-info
    AsyncStorage.setItem('user-info', JSON.stringify(user))
        .then(() => {
            dispatch({ type: LOGIN_SUCCESS, payload: user }); //finally action LOGIN_SUCCESS will fire 
        })
}

export const loggedSuccess = (user) => {
    // it get user from AsyncStorage and put it in redux
    return ({ type: LOGIN_SUCCESS, payload: user });
}