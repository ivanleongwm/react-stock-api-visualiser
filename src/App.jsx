import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import HomePage from './views/Homepage'
import News from './views/News'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-stock-api-visualiser" element={<MainPage />}/>
        <Route path="/react-stock-api-visualiser/home" element={<HomePage />}/>
        <Route path="/react-stock-api-visualiser/news" element={<News/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
