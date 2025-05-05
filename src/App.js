import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import { useState } from 'react';
import { CartContext } from './Context/CartContext';

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 
  return (
    <div id='section'>
      <CartContext>
        <Header query={searchQuery} setQuery={setSearchQuery}/>
        <Routes>
          <Route path='/' element={<Products  query={searchQuery} setQuery={setSearchQuery}/>}/>
          <Route path='/productDetail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartContext>
    </div>
  );
}

export default App;
