import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/Common.css";
import Header from './components/Header';
import Main from './pages/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);