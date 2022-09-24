import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('http://localhost:8000/api/v1/shoppinglist/products/')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
  }, []);

  return (
    <div className="ProductsContainer">
      <h2>Shopping list:</h2>
      <ul>
        {products.map((product) => {
          return (
              <li className="product-card" key={product.id}>
                <p>{product.name} ({product.quantity})</p>
              </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
