import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";

import {App} from './App'
import Login from './components/pages/Login.jsx'
import Home from './components/pages/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route element={<App />}>
        <Route path='/home' element={<Home />} />
        
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
