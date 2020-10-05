import React from "react";

//note : props is a key word in react
function Button(props) {
  let ourclass = "";
  if (1===1) {
    ourclass = "fluid-container";
  } else {
    ourclass = "container";
  }
  return (
    <div className={ourclass}>
      <button className={props.className}>{props.name}</button>
    </div>
  );
}

export default Button;
