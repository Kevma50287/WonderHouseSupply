import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AdminForm from './Features/AdminForm';
import { Route, Routes } from 'react-router-dom';
import AboutRoute from './Features/AboutRoute';
import ProductsRoute from './Features/ProductsRoute';
import ServicesRoute from './Features/ServicesRoute';
import Cart from './Features/Cart';
import LogIn from './Features/LogIn';
import SignUp from './Features/SignUp';
import React, { useEffect, useState } from 'react';


const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'
const reviewsURL = 'http://localhost:3003/reviews'


function App() {


  //state of loged in
  const [logedIn, setLogedIn] = useState("false")



  // data of our user
  const [userData, setUserData] = useState({ Cart: [] })


  
  function cartChangeNumberOfItemsCallBackFunction(qtyCart,id,setQtyCart){
    let qtyy = qtyCart
    setQtyCart(qtyy)
    


    let newUserCart = userData.Cart.map((item) => {
      if (item.id === `${id}`) { return { id: item.id, numberOfItemsToBuy: `${qtyy}` } }
      else { return item }
    })

    

    let newUserDataUpdate = {...userData}
    newUserDataUpdate.Cart = newUserCart

    console.log(newUserDataUpdate)
    // const updateObj = {Cart : newUserCart}
    setUserData(newUserDataUpdate)

      
    // delete newUserDataUpdate.id;
    console.log(userData)
    // console.log(patchUserData)
     if (logedIn === `${true}`)
     {
      
  
      fetch(`http://localhost:3002/users/${userData.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserDataUpdate)
     })
     .then ((response) => response.json())
     .then(data => data)}
     else {}

     setQtyCart("1")

  }

  //function to delete
  function cartDeleteCallBackFunction(id) {

   
    let newUserCart = userData.Cart.filter((item) => item.id !== `${id}`)

    let newUserDataDelete = {...userData}
    newUserDataDelete.Cart = newUserCart

    console.log(newUserDataDelete.Cart)
    // console.log(newUserCart)
    // const updateObj = {Cart : newUserCart}
    setUserData(newUserDataDelete)

    
    // delete newUserDataDelete.id;
  // console.log(patchUserData)
   if (logedIn === `${true}`)
   {
    

    fetch(`http://localhost:3002/users/${userData.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUserDataDelete)
   })
   .then ((response) => response.json())
   .then(data => data)}
   else {}
    
 
   


  }

  // console.log(userData)








  //function to add something to your cart
  function cartUpdateCallBackFunction(qty, id, setQty) {
    setQty("1")
    // console.log(userData)



    let newUserCart = userData.Cart.map((item) => {
      if (item.id === `${id}`) { return { id: item.id, numberOfItemsToBuy: `${+item.numberOfItemsToBuy + +qty}` } }
      else { return item }
    })


    // if (newUserCart === userData.Cart) {
    let newUserCartTwo = newUserCart.filter((item) => {
      if (item.id == `${id}`) { return item } else { }
    })




    if (newUserCartTwo.length === 0) {
      newUserCart = [...userData.Cart, { id: `${id}`, numberOfItemsToBuy: qty }]
    } else {  }




    setUserData((userData) => {
      Object.keys(userData).map((key) => {
        if (key === "Cart") {
          userData[key] = newUserCart
        } else { userData[key] = userData[key] }
      })
      // console.log(userData)
      return (userData)
      
    }
    )

    let patchUserData = {...userData}
      delete patchUserData.id;
    // console.log(patchUserData)
     if (logedIn === `${true}`)
     {
      

      fetch(`http://localhost:3002/users/${userData.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patchUserData)
     })
     .then ((response) => response.json())
     .then(data => data)}
     else {}
    
   
    // 
    // } else {}
    // console.log(userData)
    //  console.log(newUserCart)
    // console.log(logedIn)
    // console.log(qty)
    // console.log(id)



  }



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
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/cart" element={<Cart userData={userData} itemData={itemData} cartDeleteCallBackFunction={cartDeleteCallBackFunction}  cartChangeNumberOfItemsCallBackFunction={cartChangeNumberOfItemsCallBackFunction}/>} />
        <Route path="/logIn" element={<LogIn setUserData={setUserData} setLogedIn={setLogedIn} />} />
        <Route path="/products" element={<ProductsRoute itemData={itemData} cartUpdateCallBackFunction={cartUpdateCallBackFunction} />} />
        <Route path="/services" element={<ServicesRoute />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
      <AdminForm />
    </div>
  );
}

export { itemURL, userURL, reviewsURL }
export default App;
