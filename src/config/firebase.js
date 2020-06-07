'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyA8hZZB4EvAtiWOkkDz0DkBmSuKtgV1v2Y',
  authDomain: 'reactflix-742c1.firebaseapp.com',
  databaseURL: 'https://reactflix-742c1.firebaseio.com',
  projectId: 'reactflix-742c1',
  storageBucket: 'reactflix-742c1.appspot.com',
  messagingSenderId: '706738636973',
  appId: '1:706738636973:web:f44b6732e4567a1baa5e24'
})

const db = firebase.database()

export { db }
