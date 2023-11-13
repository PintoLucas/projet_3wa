import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/Common.css";
import Main from './pages/Main';
import LoginPage from './pages/Login';
import Account from './pages/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/feed" element={<Main />}></Route>
            <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);