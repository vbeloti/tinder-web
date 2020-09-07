import * as firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC17uZqggB_CO_jrO5FtQmfk9_3RnzPfs8",
  authDomain: "tinder-web.firebaseapp.com",
  databaseURL: "https://tinder-web.firebaseio.com",
  projectId: "tinder-web",
  storageBucket: "tinder-web.appspot.com",
  messagingSenderId: "146790004483",
  appId: "1:146790004483:web:55fbce2632718b2bfc9b36",
  measurementId: "G-0RTN80NDX6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
