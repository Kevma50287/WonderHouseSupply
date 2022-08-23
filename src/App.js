import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AdminForm from './Features/AdminForm';
import { Route, Routes } from 'react-router-dom';
import  AboutRoute  from './Features/AboutRoute';
import ProductsRoute from './Features/ProductsRoute';
import ServicesRoute from './Features/ServicesRoute';
import Cart from './Features/Cart';
import LogIn from './Features/LogIn';
import SignUp from './Features/SignUp';
import React ,{ useEffect, useState } from 'react';


const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'
const reviewsURL = 'http://localhost:3003/reviews'



function App() {



  function  cartUpdateCallBackFunction(qty,id,setQty) {
    // setQty("")
    console.log("upadate")
  }
  
 


  // data of our user
const [userData, setUserData]=useState({})




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
        <Route path="/cart" element={<Cart userData={userData}/>}/>
        <Route path="/logIn" element={<LogIn setUserData={setUserData}/>}/>
        <Route path="/products"  element={<ProductsRoute 
        itemData={itemData} 
        cartUpdateCallBackFunction={cartUpdateCallBackFunction}
        />}/>
        <Route path="/services"  element={<ServicesRoute/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      <Footer />
      <AdminForm />
    </div>
  );
}

export { itemURL, userURL, reviewsURL }
export default App;
