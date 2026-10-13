import React from "react";
import { identifyCurrentUser } from "./identity";

/*
  Log in as any test user. Fields left blank keep their current value.
  Saves to localStorage, then re-sends Appcues.identify() and Appcues.group().
*/

const FIELDS = [
  { id: "input-id-field", key: "currentUser" },
  { id: "input-email-field", key: "email" },
  { id: "input-role-field", key: "role" },
  { id: "input-group-field", key: "currentGroup" },
  { id: "input-plan-field", key: "planTier" },
];

const identifyUser = () => {
  const userInput = document.getElementById("input-id-field");
  if (userInput.value && userInput.value !== window.localStorage.currentUser) {
    // new user: reset per-user values so they don't carry over from the last user
    window.localStorage.setItem("timestamp", Date.now());
    window.localStorage.removeItem("email");
  }

  FIELDS.forEach(({ id, key }) => {
    const input = document.getElementById(id);
    if (input.value) window.localStorage.setItem(key, input.value.trim());
    input.value = ""; // resets text input field
  });

  identifyCurrentUser();
};

export default function AppcuesIdentifier() {
  return (
    <div>
      <h2>Enter test user ID</h2>
      <input id="input-id-field" type="text" placeholder="User ID" />
      <input id="input-email-field" type="email" placeholder="Email (optional)" />
      <input id="input-role-field" type="text" placeholder="Role (optional)" />
      <h2>Group (account)</h2>
      <input id="input-group-field" type="text" placeholder="Group ID (optional)" />
      <input id="input-plan-field" type="text" placeholder="Plan tier (optional)" />
      <button onClick={identifyUser}>Log me in</button>
    </div>
  );
}
