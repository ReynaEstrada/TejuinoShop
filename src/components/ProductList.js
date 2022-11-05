import {useEffect, useState} from 'react';
import Product from './Product';


function NavPage(props){
  return (
  <header className='flex justify-between'>
      <p>Page {props.page}</p>
      <button className='px-4 rounded-t-lg  bg-purple-800 text-black border-black'
      onClick={() => props.setPage(props.page +1)}>  
        Page {props.page + 1}
      </button>
  </header>
  )
}
function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchProducts() {
      const response = await  fetch(`https://dummyjson.com/products?page=${page}`);
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, [page]);

  return (
    <div className='container mx-auto px-6 bg-slate-400'>
      <NavPage page={page} setPage={setPage}/>
        <div className='grid lg:grid-cols-3  grid-cols-1 gap-2'> 
          {products.map((product) => <Product  key={product.id} item={product}/>)}
        </div>
      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default ProductList;