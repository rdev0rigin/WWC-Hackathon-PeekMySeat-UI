import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import App from './App';
import { FIREBASE_CONFIG } from './services/firebase.service';
import './index.css';

firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
