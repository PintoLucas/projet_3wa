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
            <Route exact path="/" element={<LoginPage />}></Route>
            <Route exact path="/feed" element={<Main />}></Route>
            <Route exact path="/account" element={<Account />}></Route>
            <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);