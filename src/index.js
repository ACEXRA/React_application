import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import UserContextProvider from "./context/user-context";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
