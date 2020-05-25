import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1s3Ly1SsTgHvVU51URtv8L3toXpw_iw0",
    authDomain: "react-firebase-db452.firebaseapp.com",
    databaseURL: "https://react-firebase-db452.firebaseio.com",
    projectId: "react-firebase-db452",
    storageBucket: "react-firebase-db452.appspot.com",
    messagingSenderId: "359741759049",
    appId: "1:359741759049:web:8a54e69cdb905820aea998"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;