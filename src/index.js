import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Root from "./Root";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Root} />
    <Route path="/app" component={App} />
  </Router>,
  document.getElementById("root")
);

module.hot.accept();
