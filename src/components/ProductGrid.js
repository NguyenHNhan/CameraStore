import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button, Container } from 'react-bootstrap';

const ProductGrid = (props) => {


  const { TileGrid, Products_data } = props;
  console.log(Products_data)
  return (
    <Container className='mt-5'>
      <h1>{TileGrid}</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {Products_data && Products_data.map((items, idx) => (
          <div className="col" key={idx} >
            <ProductCard
              idproduct={items.id_product}
              nameproduct={items.name_product}
              imgproducts={items.img_product}
              price={items.price_product}
            />
          </div>
        ))}

      </div>
      <div className='my-3 text-center'>
        <Button className='bg-dark px-5 py-2'><span className='fw-bold'>More Product</span></Button>

      </div>
    </Container>

  );
};

export default ProductGrid;



