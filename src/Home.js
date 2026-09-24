import React from "react";
import appcueslogo from "./resources/appcueslogocolor-trimmed.png"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content home">
      <div className="home-inner">
        <img className="home-logo" src={appcueslogo} alt="Appcues Logo"></img>
        <div className="home-text">
          <div className="home-titles">
            <h1>Welcome to The Appcues Test Application</h1>
            <h2>We're glad you're here!</h2>
          </div>
          <div className="home-body">
            <p>
              This application is designed to demonstrate a variety of features and capabilities within Appcues and to provide a sand box to test new functionality as well as our legacy features. Explore the different sections to see what this app can do!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
