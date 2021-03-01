import firebase from 'firebase/app'
import 'firebase/auth' 

var firebaseConfig = {
    apiKey: "AIzaSyB8v8UjtOi0oJznUEen6AnOK80S4CnAzvs",
    authDomain: "ht-project-50ad3.firebaseapp.com",
    projectId: "ht-project-50ad3",
    storageBucket: "ht-project-50ad3.appspot.com",
    messagingSenderId: "617234581639",
    appId: "1:617234581639:web:e86ead3f8aa7032dc31022"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
