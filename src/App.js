/* eslint react/prop-types: "off" */
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import DefaultForm from "./pages/DefaultForm";
import ReactDataGridUsage from "./pages/ReactDataGridUsage";
import { Button } from "@material-ui/core";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Button component={Link} to="/">
          Voltar ao início
        </Button>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Form} path="/personalizedForm" />
          <Route component={DefaultForm} path="/defaultForm" />
          <Route component={ReactDataGridUsage} path="/reactDataGrid" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
