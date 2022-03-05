import './HomePage.css'
import Header from '../components/header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllTheThings from '../components/AllTheStocks';

function HomePage() {

    const [stock, setStock] = useState([])

    const handleProductClick = (product) => {

    }

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
      <div className="App">
        <div className="content-container">
          <Header />
          <AllTheThings products={stock} handleProductClick={handleProductClick}/>
        </div>
      </div>
    );
  }

export default HomePage