import React, { useState } from 'react'
import GroupLogo from '../ProjectImajes/5 links center/GroupLogo.png';
import searchIcon from '../ProjectImajes/5 links center/searchIcon.png';
import Cart from '../ProjectImajes/5 links center/Cart.png';
import { Link, Route, Routes } from 'react-router-dom';
import SearchBar from '../Features/SearchBar';

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false)
  const [headerSearch, setHeaderSearch] = useState(null)

  const handleToggle = () => {
    const negate = !searchToggle
    setSearchToggle(negate)
  }
  
  return (
    <div className='header'>
      <div className='header-routes'>

        <Link to="/" className="header-route"><img className="header-route" src={GroupLogo} alt='home route' /></Link>
        <Link to="/about" className="header-route">ABOUT</Link>
        <Link to="/products" className="header-route">PRODUCTS</Link>
        <Link to="/services" className="header-route">SERVICES</Link>

        <button className="header-button" onClick={handleToggle}>
          <img src={searchIcon} alt='search' />
        </button>
        <input id='headersearch' type='text' name='search' onChange={(e)=>setHeaderSearch(e.target.value)}/>


        <Link to="/cart">
          <button className="header-button">
            <img src={Cart} alt='route to cart' />
          </button>
        </Link>

      </div>
    </div>


  )
}
