import React from 'react'
import GroupLogo from '../ProjectImajes/5 links center/GroupLogo.png';
import searchIcon from '../ProjectImajes/5 links center/searchIcon.png';
import Cart from '../ProjectImajes/5 links center/Cart.png';
export default function Header() {
  return (

    <div className='header'>
        <div className='header-routes'>
        
          <img className="header-route" src={GroupLogo}/>
    
          <h3 className="header-route">ABOUT</h3>
          
          <h3 className="header-route">PRODUCTS</h3>
          
          <h3 className="header-route">SERVICES</h3>

          <button>
          <img src={searchIcon}/>
          </button>

          <button>
          <img src={Cart}/>
          </button>
          
          
      </div>
    </div>
    

  )
}
