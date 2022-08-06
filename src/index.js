import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider
  config={ {
    signInRedirectURL: "https://grama-check.vercel.app/",
    signOutRedirectURL: "https://grama-check.vercel.app/",
    clientID: "Ggj3JktuupIZUgf_QvYg1ENcd1Ea",
    baseUrl: "https://api.asgardeo.io/t/areeb",
    scope: [ "openid","profile" ]
  } }
  >
  <App />
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
