import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import { useState } from 'react';
import cn from 'classnames';
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";
import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFoundPage from "./routes/NotFound";
import { TestContext } from "./context/testContext";
import s from './style.module.css';

const App = () => {
  const [theme, setTheme] = useState('light_!');
  const match = useRouteMatch('/');

  const handlerChangeTheme = val => setTheme(val);

  return (
    <>
      <TestContext.Provider value={{
        theme,
        onChangeTheme: handlerChangeTheme
      }}>

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
      </TestContext.Provider>
    </>
  )
};

export default App;