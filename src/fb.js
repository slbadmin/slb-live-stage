/* eslint-disable */

import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBwbxM6n9brVsvNsKPC4vK9n8Z6CK4UyWU",
    authDomain: "slb-live-firebase.firebaseapp.com",
    databaseURL: "https://slb-live-firebase.firebaseio.com",
    projectId: "slb-live-firebase",
    storageBucket: "slb-live-firebase.appspot.com",
    messagingSenderId: "248697607047",
    appId: "1:248697607047:web:5b63a8e47ce28a7a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;