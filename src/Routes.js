import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import ProductList from "./Pages/ProductList";
import CartList from "./Pages/CartList";

function Routes() {
  console.log("click");
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={CartList} />
      </Switch>
    </Router>
  );
}

export default Routes;
