import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    return (
        <div class="container">
        <div class="row">
          <div class="col">
            <ProductCard/>
          </div>
          <div class="col">
          <ProductCard/>
          </div>
          <div class="col">
          <ProductCard/>
          </div>
          <div class="col">
          <ProductCard/>
          </div>
          <div class="col">
          <ProductCard/>
          </div>
          <div class="col">
          <ProductCard/>
          </div>    
        </div>
      </div>
            

    );
};

export default ProductGrid;



