import React, { useState } from 'react'
import { Grid } from '@mui/material'


export default function CartItem({ itemInCart, cartDeleteCallBackFunction, cartChangeNumberOfItemsCallBackFunction }) {

  // //state for number of itimes
  const [qtyCart, setQtyCart] = useState("")

  function handleChangeTheNumber(e) {
    setQtyCart(e.target.value)
  }

  const { name, price, numberOfItemsToBuy, image, description, id } = itemInCart
  
  return (
    <Grid item className='center-horizontal' >
      <img src={image} alt={`${name}`} className='main-image' />
      <p className='itemname'>{name}</p>
      <p className='itemprice'>${price}</p>
      <p className='itemstock'>{numberOfItemsToBuy} Number of items</p>
      <p className='itemdetail'>{description}</p>
      <button className='button-style'>
        Learn More
      </button>

      <button onClick={() => cartDeleteCallBackFunction(id)} className="header-button">
        Delete
      </button>
      <input type="number" name="Qty" value={qtyCart} step="1" placeholder="0" onChange={handleChangeTheNumber} />
      <button onClick={() => cartChangeNumberOfItemsCallBackFunction(qtyCart, id, setQtyCart)} className="header-button">
        Change Number of Items
      </button>
    </Grid>
  )
}

