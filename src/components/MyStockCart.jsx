import React from 'react';

function MyStockCart(props) {
  
  const cartList = props.cart.map((ele,index) => {
    return <li
    key={index}
    onClick={() => props.handleCartClick(ele)}
    >{ele.name} [{ele.symbol}]</li>
  })

  return (
    <div className="MyStockCart">
      <h2>Your Cart!</h2>
      <ul>
           {cartList}
      </ul>
    </div>
  );
}

export default MyStockCart;
