import './HomePage.css'
import Header from '../components/header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllTheThings from '../components/AllTheStocks';
import MyStockCart from '../components/MyStockCart';

function HomePage() {
    const [cart, setCart] = useState([]);
    const [stock, setStock] = useState([])

    const handleProductClick = (product) => {
      setCart([
        ...cart,
        product
      ])
    }

    const handleCartClick = (product) => {
      //const indexMatch = cart.indexOf(product)
      //const newCart = cart.splice(indexMatch,1)
      //setCart(newCart)
      const newCart = [...cart].filter(e => e !== product)
      setCart(newCart)
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
          <div className="stockscontainer">
            <AllTheThings products={stock} handleProductClick={handleProductClick}/>
            <MyStockCart cart={cart} handleCartClick={handleCartClick}/>
          </div>
          
        </div>
      </div>
    );
  }

export default HomePage