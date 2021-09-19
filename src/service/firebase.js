import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAC-qjhzT6dPLAm355eE6dx2ZAA8bLX-O8",
    authDomain: "react-marathon-pokemon-game.firebaseapp.com",
    databaseURL: "https://react-marathon-pokemon-game-default-rtdb.firebaseio.com",
    projectId: "react-marathon-pokemon-game",
    storageBucket: "react-marathon-pokemon-game.appspot.com",
    messagingSenderId: "55132643823",
    appId: "1:55132643823:web:1122da5dbe19599bc7961a"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;

export const database = fire.database();

export default database;