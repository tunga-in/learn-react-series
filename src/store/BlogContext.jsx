import React, { createContext , useState} from "react";

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

//create our context
export const BlogContext = createContext();

// Context provider
const BlogContextProvider = (props) => {
  const [blogs, setBlogs] =useState(blogArr);

  return (
    <BlogContext.Provider value={{blogs:blogs, setBlogs:setBlogs}}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
