import React from "react";
import { Link } from "react-router-dom";
import navLogo from "./resources/appcuesfavicon.png";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the #navigation div)
*/

const Navigation = () => (

  <div id="navigation">
    <Link to="/" className="nav-logo" aria-label="Home">
      <img src={navLogo} alt="Appcues" />
    </Link>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/settings">Settings</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Login</Link>
    <div id="launchpad"></div> 
  </div>
);

export default Navigation;
