import React from "react";
import BlogSection from "../components/BlogSection";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HomePage = () => {
  return (
    <>
      <div className="container-fluid jumbotron">
        <h1 className="centered"> Check out our awesome blogs </h1>
      </div>

      <section className="row  blog-section container">
        {arr.map((e) => {
          return <BlogSection key={e} />;
        })}
      </section>
    </>
  );
};
export default HomePage;
