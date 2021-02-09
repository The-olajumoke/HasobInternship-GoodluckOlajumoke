import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./components/StateProvider"
import reducer, {initialState} from "./components/reducer"
import SideNav from "./components/SideNav"

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />

   
  </StateProvider>,
  document.getElementById('root')
);

reportWebVitals();
