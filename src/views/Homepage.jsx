import './HomePage.css'
import Header from '../components/header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {

    const [stock, setStock] = useState({
      symbol: 'empty'
    })

    useEffect(()=> {
      axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line&apikey=ed422f5ab8a52bef7a04a8d39de5129d')
      .then(res => {
        console.log("response",res.data
        )
        const stockObject = res.data;
        //console.log(stockObject[0])
        setStock(stockObject["historical"])
        console.log("Timeseries",stock)
      })
    },[])

    return (
      <div className="App">
        <div className="content-container">
          <Header />
        </div>
      </div>
    );
  }

export default HomePage