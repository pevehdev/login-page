import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";

import {App} from './App'
import {Login} from './components/pages/Login/index.jsx'

import {Register} from './components/pages/Register'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
