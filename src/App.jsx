import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddBlog from "./pages/AddBlogPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SingleBlogPage from "./pages/SingleBlogPage";
import Footer from './components/Footer'
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/addblog" component={AddBlog} />
            <Route path="/login" component={LoginPage} />
            <Route path="/singleblog" component={SingleBlogPage} />
            <Route component={Page404} />
          </Switch>
        </main>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
