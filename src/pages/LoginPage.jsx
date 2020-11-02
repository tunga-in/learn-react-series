import React,{useState} from "react";

const LoginPage = () => {
const [text, setText] = useState("");

  return (
    <div>
      <h1>Login page</h1>
      <p>{text}</p>
      <input
        onChange={(event) => setText(event.target.value)}
        placeholder="username"
      />
    </div>
  );
};
export default LoginPage;
