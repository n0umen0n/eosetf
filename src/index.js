import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import About from "views/About/About.js";
import App from "views/LandingPage/App";

import { Provider } from 'react-redux';
import store from '../src/views/store';

var hist = createBrowserHistory();



ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/About" component={About} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
