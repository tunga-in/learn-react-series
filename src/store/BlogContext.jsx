import React, { createContext,  useReducer } from "react";

let blogArr = [
  {
    id: "1",
    title: "Example blog",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium!...",
    image: "https://picsum.photos/seed/picsum/300/200",
  },
];

//create our context
export const BlogContext = createContext(); // initialize a context 

const reducerFunction = (state, action) => {

    if (action.type === "CREATE_BLOG"){
      return [...state,
        {
          id:"5",
          title:action.blog.title,
          subject:action.blog.subject,
          image:"https://picsum.photos/id/870/300/200?grayscale&blur=2"
        }
      ]
    }
    else if(action.type==="DELETE_BLOG"){
      return [] // returning the state
    }
    else if(action.type==="UPDATE_BLOG"){
      return [...state, {}] // returning the state
    }
    else{
      return state
    }


};

// Context provider
const BlogContextProvider = (props) => {
  const [blogs, dispatch] = useReducer(reducerFunction, blogArr);

  return (
    <BlogContext.Provider value={{ blogs: blogs, dispatch: dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
