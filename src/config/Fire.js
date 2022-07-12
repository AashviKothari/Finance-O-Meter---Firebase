import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyAb0xoPirHnOm9tcsgF4yTcEfBzVPWpKXA",
    authDomain: "exp-tutorial.firebaseapp.com",
    projectId: "exp-tutorial",
    storageBucket: "exp-tutorial.appspot.com",
    messagingSenderId: "887382531355",
    appId: "1:887382531355:web:03cacb47418ef40fd547be",
    measurementId: "G-NW8XQVT3MJ"
}

const fire = firebase.initializeApp(config);
export default fire;