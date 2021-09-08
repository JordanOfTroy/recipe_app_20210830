import React from "react";
import routes from "../Routes";
import { Router } from "react-router-dom";
import history from "../History";

import Header from "../components/Header";
import "../styles/app.css";

const App = () => {
  return (
    <div className="ui appContainer">
      <div className="appContainerCover">
        <Router history={history}>
          <Header />
          <div>{routes}</div>
        </Router>
      </div>
    </div>
  );
};

export default App;
