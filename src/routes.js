import React from "react";
import { Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <home />
      </Route>
    </Switch>
  );
}