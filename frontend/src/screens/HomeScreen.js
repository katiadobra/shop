import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const res = await axios.get('/api/products');
      // now we have access to res.data
      // we can distructure it
      // like { data }
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []); // do not forget an Array of dependencies

  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
