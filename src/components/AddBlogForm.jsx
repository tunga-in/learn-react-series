import React, {useState, useContext} from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BlogContext } from "../store/BlogContext";

const AddBlogForm = () => {
  const [titleValue ,setTitleValue]=useState("")
  const [subjectValue, setSubjectValue]=useState("")

  const {blogs, setBlogs} =useContext(BlogContext)

  const submitBlog = (e) => {
    e.preventDefault();
    setBlogs([...blogs,{
      id:"5",
      title:titleValue,
      subject:subjectValue,
      image:"https://picsum.photos/id/870/300/200?grayscale&blur=2"
    }])
  };

  return (
    <div>
      <div className="form-container container">
        <form onSubmit={submitBlog}>
          <label for="fname">Title</label>
          <input
            type="text"
            id="fname"
            className="form-control rounded-0"
            name="firstname"
            placeholder="blog Title.."
            onChange={(e)=>setTitleValue(e.target.value)}
          />
          <br />
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            className="form-control rounded-0"
            name="subject"
            placeholder="Start Writing ...."
            style={{ height: "200px" }}
            onChange={(e)=>setSubjectValue(e.target.value)}
          ></textarea>
          <label>
            <AiOutlineFileAdd style={{ fontSize: "2em" }} />
            <input type="file" name="Add blog Image" id="" />
            Add blog image
          </label>
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn btn-success rounded-0"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
