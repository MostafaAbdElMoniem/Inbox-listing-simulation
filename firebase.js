import * as firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyA3bJKD8QY8O7r1tJQV7OR7sNXOVkyf24A",
    authDomain: "rnapp-1a43b.firebaseapp.com",
    databaseURL: "https://rnapp-1a43b.firebaseio.com",
    projectId: "rnapp-1a43b",
    storageBucket: "rnapp-1a43b.appspot.com",
    messagingSenderId: "719505550526"
};
firebase.initializeApp(config);

export default firebase;
