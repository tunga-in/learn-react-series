import React, { createContext,  useReducer } from "react";


export const AuthContext = createContext(); // initialize a context 


const AuthContextProvider = (props) => {

  return (
    <AuthContext.Provider value={{ user:"test user"}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
