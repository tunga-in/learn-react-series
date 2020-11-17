import React from "react";
import image from "./../assets/img/image.jpg"

const SingleBlogPage = () => {
  const bgStyles = {
    
    backgroundImage: `url(${image})`,
   
  };
  return (
    <>
      <div
        className="container-fluid jumbotron bg-overlay"
        style={bgStyles}
      >
        <h1 className="centered"> Blog example  </h1>
      </div>

      <div className="blog-text container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        expedita ea officiis cum ullam, ab temporibus earum praesentium veniam
        pariatur excepturi id quis natus consectetur dolorem neque sunt omnis!
        Odit?
      </div>
    </>
  );
};

export default SingleBlogPage;
