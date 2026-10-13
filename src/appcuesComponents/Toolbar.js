import React from "react";
import { EventLog } from "./EventLog";
import { clearProfile } from "./identity";

/*
  This toolbar contains the Appcues javacript API calls useful for debugging and testing
*/


const resetAppcues = () => { // resets the session and removes user information from local storage
    window.Appcues.reset();
    clearProfile(); // removes the stored test user + group
}

const clearShow = () => {
    window.Appcues.clearShow();
}

const anonymousUser = () => {
    window.Appcues.anonymous();
}

const showFlow = () => {
  const flowId = document.getElementById("show-flow");
  window.Appcues.show(flowId.value);
  flowId.value = '';
}

const openDebugger = () => {
    window.Appcues.debug();
}

const Toolbar = () => {
    return (
        <div id="toolbar">
            <h2>The Appcues Toolbox</h2>
            <ul>
            <li>
                <h3>Enter ID and click "Appcues.show" to launch Appcues content</h3>
                <input placeholder="-AbCdEf-12345" id="show-flow" type="text"/>
                <button class="toolbar-item" onClick={showFlow}>Appcues.show()</button>
            </li>
            <li class="toolbar-item"><button onClick={clearShow}>Appcues.clear()</button></li>
            <li class="toolbar-item"><button onClick={anonymousUser}>Appcues.anonymous()</button></li>
            <li class="toolbar-item"><button onClick={openDebugger}>Appcues.debug()</button></li>
            <li class="toolbar-item"><button onClick={resetAppcues}>Appcues.reset()</button></li>
            </ul>
            <EventLog />
        </div>
    )
}

export default Toolbar;