import React from "react";
import { Link } from "react-router-dom";

const BlogSection = ({ title, subject, image}) => {

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
};

export default BlogSection;
