import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AdminForm from './Features/AdminForm';
import { Link, Route, Routes } from 'react-router-dom';
import  AboutRoute  from './Routes/AboutRoute';
import ProductsRoute from './Routes/ProductsRoute';
import ServicesRoute from './Routes/ServicesRoute';
import Cart from './Routes/Cart';
import SearchBar from './Features/SearchBar'
import { useEffect, useState } from 'react';

const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'
const reviewsURL = 'http://localhost:3003/reviews'

function App() {
  const [itemData, setItemData] = useState([])

  useEffect(() => {
    fetch(itemURL)
      .then(r => r.json())
      .then(d => setItemData(d));
  }, [])

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main itemData={itemData} />} />
        <Route path="/about" element={<AboutRoute/>}/>
        <Route path="/products"  element={<ProductsRoute itemData={itemData} />}/>
        <Route path="/services"  element={<ServicesRoute/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
      <AdminForm />
    </div>
  );
}

export { itemURL, userURL, reviewsURL }
export default App;
