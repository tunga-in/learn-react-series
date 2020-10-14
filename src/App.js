import React from "react";
import ExampleComponent from "./components/ExampleComponent";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExamplePage from "./pages/ExamplePage";
import AnotherPage from "./pages/AnotherPage";

// look at hash router from react-router-dom ...
// have a simple writeup on the difference and how to approach.
const App = () => {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact>
            <h1>Am at home</h1>
            <ExampleComponent/>
          </Route>
          <Route path="/page1" >
            <ExamplePage />
          </Route>
          <Route path="/page2" >
            <AnotherPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

//TODOS Assigments
// have a 404 page which loads when the path that user passed is not availabe
// look at useState, useEffect hooks

//? ref https://reactrouter.com/
