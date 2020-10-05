// js modules mdn.
import React from "react";
import ReactDOM from "react-dom";

import Button from "./core/Button"
import "./test.css"

// React Components : functional component



// React fragment is an invisible node element
// class component
class MyApp extends React.Component {
  render() {
    return (
      <> 
        <button>AM from a class component</button> <br />
        <br />
      
       <Button  className="warning"name="Create Post"/> 
       <br/>
       <br/>
       <Button className="danger" name="update Post"/>
      </>
    );
  }
}

const mountNode = document.querySelector(".root");
ReactDOM.render(<MyApp></MyApp>, mountNode);

//note ReactDOM.render([React element], [DOM element])

// React Element==> JSX
// DOM ==> the div in our html file

// class component : function component
// stateless component : statefull component
