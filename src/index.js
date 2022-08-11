import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {AuthContextProvider}from "./context/AuthContext"


ReactDOM.render(
  // ReactDOM.createRoot(
  //   document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
  , 
  document.getElementById("root")
);
