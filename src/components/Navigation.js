import React from "react";
import { Link } from "react-router-dom";
// functional
const Navigation = () => {
  const userIsloggedIn = true;
  if (userIsloggedIn) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Example page</Link>
          </li>
          <li>
            <Link to="/page2">page 2</Link>
          </li>
       
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;

// props : state.
// useState : react hoook
// setState ... class based method.
// useEffect hook
// componentdidmount method

///? classes in javascript