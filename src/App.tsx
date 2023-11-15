import './App.scss';
import Home from './content/components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './content/components/ProductDetails/ProductDetails';
import { products } from './content/model/product.model';


function App() {
  const productsList = [...products];
  return (
    <BrowserRouter basename={'/'}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home productsList = {productsList} />} />
          <Route path='/product/:alt' element={<ProductDetails productsList = {productsList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
