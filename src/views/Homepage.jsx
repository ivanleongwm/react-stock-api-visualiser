import './HomePage.css'
import Header from '../components/header';
import React, { useEffect, useState } from 'react';

import AllTheThings from '../components/AllTheStocks';
import MyStockCart from '../components/MyStockCart';

function HomePage({stock, setStock, cart, setCart}) {
    
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