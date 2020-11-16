import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";
import {AuthContext} from "../store/AuthContext"
const Navigation = () => {
  const { isLoggedIn, user, firebase } = useContext(AuthContext);

  const AuthLinks = () => {
    return (
      <>
        <li className="nav-list-item">
          <Link to="/addblog" className="nav-link">
            create blog
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-list-item">
          <button className="btn btn-warning" onClick={()=>firebase.auth().signOut()} className="nav-link">
            Logout
          </button>
        </li>
      </>
    );
  };
  const GuestLinks = () => {
    return (
      <>
        <li className="nav-list-item">
          <Link to="/login" className="nav-link">
            Get Started
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/" className="nav-link">
            Blogs
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbrand">
          <img src={logo} alt="logo" />{" "}
          <span className="navbrand-text">super-duper-blog-app</span>
        </Link>
      </div>
      <ul className="nav">{isLoggedIn ? <AuthLinks /> : <GuestLinks />}</ul>
    </nav>
  );
};

export default Navigation;

// props : state.
// useState : react hoook
// setState ... class based method.
// useEffect hook
// componentdidmount method

///? classes in javascript
