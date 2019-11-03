import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as history from "history";
import "./styles/index.css";

import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";

const browserHistory = history.createBrowserHistory;
ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
