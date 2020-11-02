import React from "react";
import { Link } from "react-router-dom";

const BlogSection = ({ title, subject, image,setBlogs,blogs }) => {
  const addBlog=()=>{
    setBlogs([...blogs,{
      id:"5",
      title:"Angles has fallen",
      subject:"something",
      image:"https://picsum.photos/id/870/300/200?grayscale&blur=2"
    }])
  }
  return (
    <div className="col-4 mb-3">
      <button className="btn btn-warning" onClick={addBlog}>Add Blog</button>
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
