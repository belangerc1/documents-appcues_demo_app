import { setup } from '@appcues/web-sdk'; // importing this creates window.Appcues and queues calls until setup() finishes
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { APPCUES_ACCOUNTS, APPCUES_BUNDLE_DOMAINS, DEFAULT_ACCOUNT } from './appcuesConfig';

// Load Appcues via the npm SDK (replaces the old script tag in public/index.html).
// Uses the account picked in the Login page switcher, falling back to the US account (119617).
const savedAccount = localStorage.getItem('selectedScript');
const accountId = Object.values(APPCUES_ACCOUNTS).includes(savedAccount) && savedAccount
  ? savedAccount
  : DEFAULT_ACCOUNT;

setup(accountId, { bundleDomain: APPCUES_BUNDLE_DOMAINS[accountId] });
 
ReactDOM.render(<App />, document.getElementById('root'));

// This attaches the actual working app from App.js onto the HTML element in the index.html file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
