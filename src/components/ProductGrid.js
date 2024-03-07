import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button, Container } from 'react-bootstrap';
import demoproducts from './data';

const ProductGrid = (props) => {
  const [showproduct, setShowProduct] = useState(8);
const handlemoreproduct = () =>{
  setShowProduct(length => length+8);
}


const {TileGrid} = props;
  return (
    <Container className='mt-5'>
      <h1>{TileGrid}</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {/* {Array.from({ length: showproduct }).map((_, idx) => (
          <div className="col" key={idx} >
            <ProductCard nameproduct='123' />
          </div>
        ))} */}
        
        {demoproducts.map((demoproduct, idx) => (
          <div className="col" key={idx} >
            <ProductCard 
            idproduct = {demoproduct.id}
            nameproduct={demoproduct.name}
            description={demoproduct.description}
            price={demoproduct.price}
             />
          </div>
        ))}

      </div>
      <div className='my-3 text-center'>
      <Button className='bg-dark px-5 py-2' onClick={handlemoreproduct}><span className='fw-bold'>More Product</span></Button>

      </div>
    </Container>

  );
};

export default ProductGrid;



