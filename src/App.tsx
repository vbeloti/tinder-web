import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
          <Route path="/">
           Home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
