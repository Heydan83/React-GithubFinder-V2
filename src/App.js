import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import { Alert } from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import GithubSate from "./context/github/GithubState";
import AlertSate from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubSate>
      <AlertSate>
        <Router>
          <div className='App'>
            <Navbar icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertSate>
    </GithubSate>
  );
};

export default App;
