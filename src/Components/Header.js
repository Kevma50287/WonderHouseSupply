import React from 'react'
import GroupLogo from '../ProjectImajes/5 links center/GroupLogo.png';
import searchIcon from '../ProjectImajes/5 links center/searchIcon.png';
import Cart from '../ProjectImajes/5 links center/Cart.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/" className="header-route">
        <img className="header-route wonderLogo" src={GroupLogo} alt="group logo" />
      </Link>

      <div className='header-routes'>

        <Link to="/about" className="header-route">ABOUT</Link>

        <Link to="/products" className="header-route">PRODUCTS</Link>

        <Link to="/services" className="header-route">SERVICES</Link>

      </div>
      <div className='header-buttons'>
        <button className="header-button">
          <img src={searchIcon} alt="search icon" />
        </button>

        <Link to="/cart">
          <button className="header-button">
            <img src={Cart} alt='cart icon' />
          </button>
        </Link>

        <Link to="/logIn">
          <button className="header-button">
            Login
          </button>
        </Link>

        <Link to="/signUp">
          <button className="header-button">
            Sign Up
          </button>
        </Link>
      </div>
    </div>


  )
}