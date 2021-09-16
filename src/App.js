// import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={GamePage} />
        <Route path="/about" render={() => (
          <h1>This is page About</h1>
        )} />
        <Route render={() => (
          <h1>404 Not Found</h1>
        )} />
      </Switch>
    </BrowserRouter>
  )

};

export default App;