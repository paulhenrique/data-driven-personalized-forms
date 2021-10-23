/* eslint react/prop-types: "off" */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import DefaultForm from "./pages/DefaultForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Form} path="/personalizedForm" />
          <Route component={DefaultForm} path="/defaultForm" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
