import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/v1/shoppinglist/products/'
      })
        .then((response) => {
          setProducts(response.data);
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
