import { useState } from "react";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";

const App = () => {

  const [page, setPage] = useState('app');

  const handlerChangePage = (page) => {
    setPage(page);
  }

  switch (page) {
    case "home":
      return <HomePage onChangePage={handlerChangePage}/>
    case "start":
      return <GamePage backToHomeHandler={handlerChangePage}/>
    default:
      return <HomePage onChangePage={handlerChangePage}/>
  }

};

export default App;