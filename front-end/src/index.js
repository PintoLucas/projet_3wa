import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/Main.css";
import Header from './components/Header';
import Feed from './pages/Feed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Feed />}>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);