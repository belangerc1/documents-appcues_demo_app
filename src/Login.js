import React from "react";
import AppcuesIdentifier from "./appcuesComponents/Identifier";
import ScriptSwitcher from "./appcuesComponents/ScriptSwitcher";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Login = () => {
  return (
    <div className="app-content">
      <h1>Login your user here</h1>
      <AppcuesIdentifier/>
      <ScriptSwitcher/>
    </div>
  );
};

export default Login;