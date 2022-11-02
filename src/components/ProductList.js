import {useEffect, useState} from 'react';
import Product from './Product';
import React from 'react'

function ProductList() {

    const [ProductTec, setonlyProducts] = useState([])

    useEffect(() => {
        async function fetchProductos() {
        const response = await  fetch ('https://dummyjson.com/products');
        const data = await response.json();
        setonlyProducts(data.products);
   }
   fetchProductos();
    }, []);
  return (
    <div className='container mx-auto px-6 bg-slate-400'>
      <div className='grid grid-cols-3 gap-2'>
        {ProductTec.map((product) => {
        return (
          <div >
            <Product  key={product.id} Product={product}/>
          </div>
        );
        })}
      </div>
    </div>
  );
}

export default ProductList;