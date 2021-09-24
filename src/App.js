import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// import { useState } from 'react';
import cn from 'classnames';
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";
import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFoundPage from "./routes/NotFound";

// import { TestContext } from "./context/testContext";

import { FireBaseContext } from "./context/firebaseContext";
import Firebase from "./service/firebase";

import s from './style.module.css';

const App = () => {

  // const [theme, setTheme] = useState('light_!');

  // const match = useRouteMatch('/');

  // const handlerChangeTheme = val => setTheme(val);

  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <>
      <FireBaseContext.Provider value={new Firebase()}>

        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Route>
            <>
              <MenuHeader bgActive={!isPadding} />
              <div className={cn(s.wrap, {
                [s.isHomePage]: isPadding
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

      </FireBaseContext.Provider>
    </>
  )
};

export default App;