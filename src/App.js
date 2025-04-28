import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import ItemCard from './Components/ItemCard';


function App() {
  return (
    <>
    <Header/>
    {/* <ItemCard/> */}
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/productdetail' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
