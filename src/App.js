import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./styles.css";

const Hats = () => <h1>HATS PAGE</h1>;

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}
