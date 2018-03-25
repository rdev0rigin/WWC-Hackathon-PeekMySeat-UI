import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from "firebase/app";
import {FIREBASE_CONFIG} from "./services/firebase.service";

firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
