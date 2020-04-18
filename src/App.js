import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sign_In from "./Pages/SignIn";
import Sign_Up from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign">
            <Sign_In />
          </Route>
          <Route path="/registr">
            <Sign_Up />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
