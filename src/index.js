import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" render={() => <Redirect to="/app" />} />
    <Route path="/app" component={App} />
  </Router>,
  document.getElementById("root")
);

module.hot.accept();
