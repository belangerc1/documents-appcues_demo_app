import React from "react";
import { BrowserRouter} from "react-router-dom";
import { logEvents } from "./appcuesComponents/EventLog";
import AppcuesRouter from "./Appcues";
import { identifyCurrentUser } from "./appcuesComponents/identity";

/*
The AppcuesRouter contains the Appcues.page call, as well as all the app's page
changes. It needs to be additionally wrapped in BrowserRouter to function properly.

This is also where the Appcues.identify call is made, as well as any event listeners
like Appcues.on so that they will be called every time the page loads.
*/

const App = () => {
  // Identifies the stored test user (createdAt, role, email, language) and their
  // group (planTier). Defaults live in appcuesComponents/identity.js
  identifyCurrentUser();

  window.Appcues.on("all", function(name, payload) {
    // console.log(name);     // uncomment these two lines if you'd like to
    // console.log(payload);  // log all events into the dev tools console

    logEvents(name, payload); // adds events into the event log on the page
  })

  window.Appcues.loadLaunchpad("#launchpad", { // loads Launchpad on this element
    position: "right"
  })
  
  return ( 
    <BrowserRouter> 
      <AppcuesRouter /> 
    </BrowserRouter>
  )
}

export default App;
