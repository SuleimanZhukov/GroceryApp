import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvWkKgf_9ve5_mJKBNR66jr4jw-a75Wfs",
  authDomain: "grocery-store-app-994fe.firebaseapp.com",
  projectId: "grocery-store-app-994fe",
  storageBucket: "grocery-store-app-994fe.appspot.com",
  messagingSenderId: "528202077585",
  appId: "1:528202077585:web:d0929e97a44ae32fd73630",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
