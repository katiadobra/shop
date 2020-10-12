import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../store/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // without Redux:
    // const fetchProducts = async () => {
    //   const { data } = await axios.get('/api/products');
    //   setProducts(data);
    // };
    // fetchProducts();

    // with Redux:
    dispatch(listProducts());
  }, [dispatch]); // do not forget an Array of dependencies

  return (
    <>
      <h2>Latest Products</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
