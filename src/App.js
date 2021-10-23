/* eslint react/prop-types: "off" */
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
