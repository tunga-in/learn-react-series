import React from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../store/BlogContext";

const BlogSection = ({ title, subject, image }) => {
  return (
    //Context consumer : can be used with both functional and class based compenents
    <BlogContext.Consumer>
      {(value) => {
        const {blogs, setBlogs}= value
        console.log(blogs);
        return (
          <div className="col-4 mb-3">
            <div className="card col-12  border-light">
              <img className="card-img-top" src={image} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {subject}
                  <Link to="/singleblog" className="btn btn-primary">
                    Read me
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default BlogSection;
