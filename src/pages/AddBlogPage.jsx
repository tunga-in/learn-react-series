import React from "react";
import AddBlogForm from "../components/AddBlogForm";

const AddBlog = ({blogs, setBlogs}) => {
  return (
    <>
      <h1 className="centered">Create a new Blog</h1>
      <AddBlogForm blogs={blogs} setBlogs={setBlogs}/>
    </>
  );
};
export default AddBlog;
