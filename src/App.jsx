import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import HomePage from './views/Homepage'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-stock-api-visualiser" element={<MainPage />}/>
        <Route path="/react-stock-api-visualiser/home" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
