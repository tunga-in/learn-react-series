import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg"

const Navigation = () => {

    return (
      <nav className="navbar">
        <div>
        <Link to="/" className="navbrand"><img src={logo} alt="logo" /> <span className="navbrand-text">super-duper-blog-app</span></Link>
        </div>
        <ul className="nav">
          <li className="nav-list-item">
            <Link to="/addblog" className="nav-link">
              create blog
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login" className="nav-link">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    );
  }


export default Navigation;

// props : state.
// useState : react hoook
// setState ... class based method.
// useEffect hook
// componentdidmount method

///? classes in javascript
