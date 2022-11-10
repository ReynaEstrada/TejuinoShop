import {useEffect, useState} from 'react';
import Product from './Product';

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchProducts() {
      const response = await  fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto px-6 bg-slate-400'>
      <div className='grid lg:grid-cols-3  grid-cols-1 gap-2'> 
        {products.map((product) => <Product  key={product.id} item={product}/>)}
      </div>
    </div>
  );
}

export default ProductList;