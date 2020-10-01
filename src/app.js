import React from "react"
import ReactDOM from 'react-dom'
function HelloWorld() {
  return <h3>Hello World from React</h3>; //JSX
}

console.log("something");
ReactDOM.render(<HelloWorld />, document.querySelector("#app"));

//Comes from react-dom allows to connect our app to the DOM

