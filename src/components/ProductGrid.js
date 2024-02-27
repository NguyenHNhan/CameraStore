import React from 'react';
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';

const ProductGrid = () => {

  return (
    <Container className='mt-5'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div className="col" key={idx} >
            <ProductCard />
          </div>
        ))}

      </div>
      
    </Container>

  );
};

export default ProductGrid;



