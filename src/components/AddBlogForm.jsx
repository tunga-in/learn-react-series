import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
const AddBlogForm = () => {
  return (
    <div>
      <div className="form-container container">
        <form action="/action_page.php">
          <label for="fname">Title</label>
          <input
            type="text"
            id="fname"
            className="form-control rounded-0"
            name="firstname"
            placeholder="blog Title.."
          />
<br/>
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            className="form-control rounded-0"
            name="subject"
            placeholder="Start Writing ...."
            style={{ height: "200px" }}
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
