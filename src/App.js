// import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import cn from 'classnames';
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";

import s from './style.module.css';

const App = () => {

  const match = useRouteMatch('/');
  console.log(`^_^ match `, match);
  return (
    <Switch>
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
              <Route path="/about" render={() => (
                <h1>This is page About</h1>
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>

      <Route render={() => (
        <h1>404 Not Found</h1>
      )} />
    </Switch>
  )
};

export default App;