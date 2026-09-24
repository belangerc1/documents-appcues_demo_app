import React from "react";
import appcueslogo from "./resources/appcueslogo.jpg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <div className="home-header">
        <img src={appcueslogo} alt="Appcues Logo"></img>
      </div>
      <div className="home-body">
        <h1>Welcome to this feature-rich test application</h1>
        <h2>We're glad you're here</h2>
        <p>
          This application is designed to demonstrate a variety of features and capabilities within Appcues and to provide a sand box to test new functionality as well as our legacy features. Explore the different sections to see what this app can do!
        </p>
      </div>
    </div>
  );
};

export default Home;


