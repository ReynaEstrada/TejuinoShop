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
    const [ProductTec, setonlyProducts] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchProductos() {
        const response = await  fetch(`https://dummyjson.com/products?page=${page}`);
        const data = await response.json();
        setonlyProducts(data.products);
   }
   fetchProductos();
    }, [page]);
  return (
    <div className='container mx-auto px-6 bg-slate-400'>
        <NavPage page={page} setPage={setPage}/>
      <div className='grid grid-cols-3 gap-2'>
        {ProductTec.map((product) => {
        return (
          <div >
            <Product  key={product.id} Product={product}/>
          </div>
        );
        })}
      </div>
      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default ProductList;