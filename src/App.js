import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([])
  const [fetchProducts, setFetchProducts] = useState(true)

  useEffect(() => {
    if (fetchProducts) {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/v1/shoppinglist/products/'
      })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
            console.log(err.message);
        })
        .finally(() => { setFetchProducts(false)} );
      }
  }, [fetchProducts]);

  const createProduct = event => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      quantity: event.target.quantity.value,
    }

    axios({
      method: 'post',
      url: 'http://localhost:8000/api/v1/shoppinglist/products/',
      data: data
    })
      .then(() => {
        setFetchProducts(true);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }

  return (
    <div className="ProductsPage">
      <div className="ProductsForm">
        <h2>Add a product to the list:</h2>
        <form onSubmit={createProduct}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" />
            </label>
            <label>
              <p>Quantity</p>
              <input name="quantity" />
            </label>
          </fieldset>
          <button type="submit">Add product</button>
        </form>
      </div>
      <div className="ProductsList">
        <h2>Shopping list:</h2>
        <ul>
          {products.map((product) => {
            return (
                <li className="Product" key={product.id}>
                  <p>{product.name} ({product.quantity})</p>
                </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
