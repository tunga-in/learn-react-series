import React from "react";
import BlogPreview from "./components/BlogPreview";
import Navigation from "./components/Navigation";
import AddBlog from "./pages/AddBlog";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <h1>Am at home</h1>
            </Route>
            <Route path="/addblog">
              <AddBlog />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/single">
              <BlogPreview />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
