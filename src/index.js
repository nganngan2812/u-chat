import React from 'react';
import {StrictMode} from 'react';
import {createRoot}from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <AppProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AppProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
