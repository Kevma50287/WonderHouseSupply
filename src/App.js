import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AdminForm from './Features/AdminForm';
import { Route, Routes } from 'react-router-dom';
import AboutRoute from './Features/AboutRoute';
import ProductsRoute from './Features/ProductsRoute';
import ServicesRoute from './Features/ServicesRoute';
import Cart from './Features/Cart/Cart';
import LogIn from './Features/Login_Signup/LogIn';
import SignUp from './Features/Login_Signup/SignUp';
import React, { useEffect, useState } from 'react';
import ItemPage from './Features/ItemPage/ItemPage';
import ProductInfo from './Features/ProductInfo';
import NotFound from './Features/NotFound';
import ConfirmationPage from './Features/ConfirmationPage';
import { createTheme, ThemeProvider } from '@mui/material';


const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'
const reviewsURL = 'http://localhost:3003/reviews'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1250,
      xl: 1536
    }
  }
})

function App() {

  //state of loged in
  const [logedIn, setLogedIn] = useState("false")

  // data of our user
  const [userData, setUserData] = useState({ Cart: [] })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  function cartChangeNumberOfItemsCallBackFunction(qtyCart, id, setQtyCart) {

    let qtyy = qtyCart
    setQtyCart(qtyy)

    let newUserCart = userData.Cart.map((item) => {
      if (item.id === `${id}`) { return { id: item.id, numberOfItemsToBuy: `${qtyy}` } }
      else { return item }
    })

    let newUserDataUpdate = { ...userData }
    newUserDataUpdate.Cart = newUserCart

    setUserData(newUserDataUpdate)

    if (logedIn === `${true}`) {
      fetch(`http://localhost:3002/users/${userData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserDataUpdate)
      })
        .then((response) => response.json())
        .then(data => data)
    }
    else { }

    setQtyCart("1")

  }

  //function to delete
  function cartDeleteCallBackFunction(id) {
    let newUserCart = userData.Cart.filter((item) => item.id !== `${id}`)

    let newUserDataDelete = { ...userData }
    newUserDataDelete.Cart = newUserCart

    console.log(newUserDataDelete.Cart)
    setUserData(newUserDataDelete)

    if (logedIn === `${true}`) {
      fetch(`http://localhost:3002/users/${userData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserDataDelete)
      })
        .then((response) => response.json())
        .then(data => data)
    }
    else { }

  }

  //function to add something to your cart
  function cartUpdateCallBackFunction(qty, id, setQty) {
    setQty("1")

    let newUserCart = userData.Cart.map((item) => {
      if (item.id === `${id}`) { return { id: item.id, numberOfItemsToBuy: `${+item.numberOfItemsToBuy + +qty}` } }
      else { return item }
    })
    // if (newUserCart === userData.Cart) {
    let newUserCartTwo = newUserCart.filter((item) => {
      if (item.id === `${id}`) { return item } else { }
    })


    if (newUserCartTwo.length === 0) {
      newUserCart = [...userData.Cart, { id: `${id}`, numberOfItemsToBuy: qty }]
    } else { console.log("wow") }


    if (newUserCartTwo.length === 0) {
      newUserCart = [...userData.Cart, { id: `${id}`, numberOfItemsToBuy: qty }]
    } else { }


    setUserData((userData) => {
      Object.keys(userData).map((key) => {
        if (key === "Cart") {
          userData[key] = newUserCart
        } else {
          userData[key] = userData[key]
        }
      })
      return (userData)
    }
    )

    let patchUserData = { ...userData }
    delete patchUserData.id;

    if (logedIn === `${true}`) {
      fetch(`http://localhost:3002/users/${userData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchUserData)
      })
        .then((response) => response.json())
        .then(data => data)
    }
    else { }
  }


  const [itemData, setItemData] = useState([])

  useEffect(() => {
    fetch(itemURL)
      .then(r => r.json())
      .then(d => setItemData(d));
  }, [])


  return (
    <div id="AppContainer">
      <ThemeProvider theme={theme}>
        <Header userData={userData}/>

        <Routes>
          <Route path="/" element={<Main itemData={itemData} />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/cart" element={<Cart userData={userData} itemData={itemData} cartDeleteCallBackFunction={cartDeleteCallBackFunction} cartChangeNumberOfItemsCallBackFunction={cartChangeNumberOfItemsCallBackFunction} />} >
            <Route path='confirmation' element={<ConfirmationPage />} />
          </Route>
          <Route path="/logIn" element={<LogIn setUserData={setUserData} setLogedIn={setLogedIn} />} />
          <Route path="/products" element={
            <ProductsRoute
              itemData={itemData}
            />
          }>
            <Route index element={<ItemPage />} />
            <Route path=":productId" element={<ProductInfo cartUpdateCallBackFunction={cartUpdateCallBackFunction} />} />
          </Route>
          <Route path="/services" element={<ServicesRoute />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/addNewTool" element={<AdminForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}


export { itemURL, userURL, reviewsURL }
export default App;
