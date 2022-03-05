import './MainPage.css'
import Cards from '../components/cards'
import Graphs from '../components/graphs'
import Header from '../components/header'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm'

function MainPage() {
    const [dailyPrices,setDailyPrices] = useState([])
    const [stock, setStock] = useState({
        symbol: 'empty'
      })
    
      useEffect(()=> {
        axios.get('https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=ed422f5ab8a52bef7a04a8d39de5129d')
        .then(res => {
          const stockObject = res.data;
          //console.log(stockObject[0])
          setStock(stockObject[0])
          //console.log(stock)
        })
      },[])

    return (
      <div className="App">
        <div className="content-container">
          <div>{stock.price}</div>
          <Header />
          <SearchForm setDailyPrices={setDailyPrices}/>
          <Graphs dailyPrices={dailyPrices}/>
          
        </div>
      </div>
    );
  }

export default MainPage

//<Cards stock={stock}/>