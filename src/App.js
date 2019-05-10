import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';





  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpV0JTtQnjFF2kcFl3GDYRdNpZ7gzkSdA",
    authDomain: "bloc-chat-8329b.firebaseapp.com",
    databaseURL: "https://bloc-chat-8329b.firebaseio.com",
    projectId: "bloc-chat-8329b",
    storageBucket: "bloc-chat-8329b.appspot.com",
    messagingSenderId: "858020549552",
    appId: "1:858020549552:web:ef36210ab75020cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function App() {
  return (

    <div className="App">

      <RoomList firebase={firebase}/>
    </div>
  );
}

export default App;
