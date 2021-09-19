// import { useState } from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
// import firebase from  "firebase";

import firebase from "firebase/compat/app"; //firebase9!
// import firebase from "firebase/compat/app"; //firebase9!
import "firebase/compat/database"; //firebase9!
// пробовали?

import cn from 'classnames';
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";
import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFoundPage from "./routes/NotFound";

import s from './style.module.css';



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-qjhzT6dPLAm355eE6dx2ZAA8bLX-O8",
  authDomain: "react-marathon-pokemon-game.firebaseapp.com",
  databaseURL: "https://react-marathon-pokemon-game-default-rtdb.firebaseio.com",
  projectId: "react-marathon-pokemon-game",
  storageBucket: "react-marathon-pokemon-game.appspot.com",
  messagingSenderId: "55132643823",
  appId: "1:55132643823:web:1122da5dbe19599bc7961a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
  console.log(`^_^ snapshot ↓ `);
  // console.log(snapshot.val());
  console.log(snapshot.val());
});

const App = () => {

  const match = useRouteMatch('/');
  return (
    <Switch>
      <Route path="/404" component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  )
};

export default App;