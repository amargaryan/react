import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzB-aCAPJ9kgIWzeBTZkA4KtqkspkG5Bc",
    authDomain: "firs-react-project.firebaseapp.com",
    databaseURL: "https://firs-react-project.firebaseio.com",
    projectId: "firs-react-project",
    storageBucket: "firs-react-project.appspot.com",
    messagingSenderId: "732273334192",
    appId: "1:732273334192:web:5f9b09cbaf14da59ac6875"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;