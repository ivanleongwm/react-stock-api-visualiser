import React from 'react';
import './AllTheStocks.css'

function AllTheThings(props) {

  const productsList = props.products.map((ele,index) => {
    const item = <li 
        key={index}
        onClick={() => props.handleProductClick(ele)}
        >{ele.name} [{ele.symbol}]</li>
    return item
  })
 
  return (
    <div className="AllTheThings">
       <h2>Stock Tickers</h2>
       <ul>
           {productsList}
       </ul>
    </div>
  );
}

export default AllTheThings;
