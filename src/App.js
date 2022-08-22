import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AdminForm from './Features/AdminForm';
import { Link, Route, Routes } from 'react-router-dom';
import  AboutRoute  from './Features/AboutRoute';
import ProductsRoute from './Features/ProductsRoute';
import ServicesRoute from './Features/ServicesRoute';
import Cart from './Features/Cart';
import SearchBar from './Features/SearchBar'

const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'
const reviewsURL = 'http://localhost:3003/reviews'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutRoute/>}/>
        <Route path="/products"   element={<ProductsRoute/>}/>
        <Route  path="/services"  element={<ServicesRoute/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/searchBar" element={<SearchBar/>}/>
      </Routes>
      <Footer />
      <AdminForm />
    </div>
  );
}

export { itemURL, userURL, reviewsURL }
export default App;
