import  './App.css';
import './index.css'
import ProductList from './components/ProductList';
import Product from './components/Product';

function App() {
  return <div className='bg-gray-800 text-white'>
     <h1 className='text-center display-1 py-4'>PRODUCTOS</h1>
     <ProductList/>
  </div>
}

export default App;
