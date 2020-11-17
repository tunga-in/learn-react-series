import React, {Component} from "react";
import { BlogContext } from "../store/BlogContext";

class Footer extends Component {
  static contextType = BlogContext;
  render(){
    const {blogs, setBlogs} = this.context
    
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <span className="text-muted">{blogs[0].title}.</span>
      </div>
    </footer>
  );}
}

export default Footer;
