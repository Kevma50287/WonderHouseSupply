import React from 'react'
import GroupLogo from '../ProjectImajes/5 links center/GroupLogo.png';
import searchIcon from '../ProjectImajes/5 links center/searchIcon.png';
import Cart from '../ProjectImajes/5 links center/Cart.png';
import { Link, Route, Routes } from 'react-router-dom';





export default function Header() {
  return (






    <div className='header'>
        <div className='header-routes'>
      

          <Link  to="/"  className="header-route"><img className="header-route" src={GroupLogo}/></Link>
          <Link  to="/about"  className="header-route">ABOUT</Link>
          
          <Link  to="/products" className="header-route">PRODUCTS</Link>
          
          <Link  to="/services" className="header-route">SERVICES</Link>

          <Link to="/searchBar">
          <button className="header-button">
          <img src={searchIcon}/>
          </button>
          </Link>

          <Link to="/cart">
          <button className="header-button">
          <img src={Cart}/>
          </button>
          </Link>
          
      </div>
    </div>
    

  )
}
