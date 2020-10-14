import React, { Component } from "react";
class BlogPreview extends Component {
  constructor() {
    super();
    this.state = {
      text: "initial text",
    };
  }
  getText = (event) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <>
        <h1>hello world {this.props.name}</h1>
        <p>{this.state.text}</p>
        <input placeholder="Enter some text" onChange={this.getText} />
      </>
    );
  }
}



export default BlogPreview;

// props : shared data --passed in through the parent compnent

// state : internal data -- available for the component it self
