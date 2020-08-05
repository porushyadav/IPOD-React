import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeLfzHtpudjlos8AOiyxPIT5rktHG_LXE",
  authDomain: "cart-4c74f.firebaseapp.com",
  databaseURL: "https://cart-4c74f.firebaseio.com",
  projectId: "cart-4c74f",
  storageBucket: "cart-4c74f.appspot.com",
  messagingSenderId: "829713431522",
  appId: "1:829713431522:web:0b44d496fde6bed45417bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

