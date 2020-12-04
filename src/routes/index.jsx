import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/series" exact component={Series} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
