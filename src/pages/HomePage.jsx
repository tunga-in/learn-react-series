import React, {useState} from "react";
import BlogSection from "../components/BlogSection";

let blogArr = [{
  id:"1",
  title:"Example blog",
  subject:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium!...",
  image:"https://picsum.photos/seed/picsum/300/200"
},
{
  id:"2",
  title:"Example blog 2",
  subject:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium!...",
  image:"https://picsum.photos/300/200?grayscale"
},
{
  id:"3",
  title:"Example blog 3",
  subject:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium!...",
  image:"https://picsum.photos/300/200/?blur"
},
];

const HomePage = () => {

  const [blogs, setBlogs] =useState(blogArr);

  return (
    <>
      <div className="container-fluid jumbotron">
        <h1 className="centered"> Check out our awesome blogs </h1>
      </div>

      <section className="row  blog-section container">
        {blogs.map((item, index) => {
          return <BlogSection key={index} title={item.title} subject={item.subject} image={item.image} setBlogs={setBlogs} blogs={blogs} />;
        })}
      </section>
    </>
  );
};
export default HomePage;
