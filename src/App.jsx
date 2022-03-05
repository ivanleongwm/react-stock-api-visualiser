import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import HomePage from './views/Homepage'
import News from './views/News'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [stock, setStock] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    axios.get('https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=ed422f5ab8a52bef7a04a8d39de5129d')
    .then(res => {
      console.log("response",res.data
      )
      const stockObject = res.data;
      //console.log(stockObject[0])
      setStock(stockObject)
      console.log("ListOfStocks",stock)
    })
  },[])


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-stock-api-visualiser" element={<MainPage />}/>
        <Route path="/react-stock-api-visualiser/home" element={<HomePage 
        stock={stock} setStock={setStock} cart={cart} setCart={setCart}/>}/>
        <Route path="/react-stock-api-visualiser/news" element={<News cart={cart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
