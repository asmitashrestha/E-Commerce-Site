import React, { useState } from 'react';


function Add() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Online Store</h1>
      </header>
      <main>
        <div className="product-list">
          <ProductCard
            name="Product 1"
            price={10.99}
            addToCart={() => addToCart('Product 1')}
          />
          <ProductCard
            name="Product 2"
            price={19.99}
            addToCart={() => addToCart('Product 2')}
          />
          <ProductCard
            name="Product 3"
            price={14.99}
            addToCart={() => addToCart('Product 3')}
          />
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 My Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ProductCard({ name, price, addToCart }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Add;
