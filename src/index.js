import React from "react";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/utils/GlobalStyles";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
