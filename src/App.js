import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        .finally(() => { setFetchProducts(false) });
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
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h3>Add a product to the list:</h3>
          <Form onSubmit={createProduct}>
            <Form.Group class="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group class="mb-2">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name="quantity" />
            </Form.Group>
            <Button type="submit" variant="primary">Add product</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row className="mb-4">
        <Col>
          <h3>Shopping list <Badge bg="dark" pill>{products.length} products</Badge></h3>
          <ListGroup>
            {products.map((product) => {
              return (
                <ListGroup.Item className="Product" key={product.id}>
                  <p>{product.name} ({product.quantity})</p>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
