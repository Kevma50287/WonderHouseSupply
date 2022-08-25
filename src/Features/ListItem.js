import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Cart from '../ProjectImajes/5 links center/Cart.png';
import { useNavigate } from 'react-router-dom';

export default function ListItem({ item, cartUpdateCallBackFunction }) {
  const { name, price, numberInStock, image, description, id } = item

  //Button navigation
  const navigate = useNavigate()

  //state for quality of itimes
  const [qty, setQty] = useState("1")

  function handleUpdate() {
    console.log(cartUpdateCallBackFunction)
  }

  function handleChange(e) {
    setQty(e.target.value)
  }


  
  return (
    <Grid item className='center-horizontal' >
      <img src={image} alt={`${name}`} className='main-image' />
      <p className='itemname'>{name}</p>
      <p className='itemprice'>${price}</p>
      <p className='itemstock'>{numberInStock} Items in stock</p>
      <p className='itemdetail'>{description}</p>
      <button className='button-style' onClick={()=>navigate(`/products/${id}`) }>
        Learn More
      </button>




      <button onClick={() => cartUpdateCallBackFunction(qty, id, setQty)} className="header-button">
        Add to card<img src={Cart} alt='add to cart' />
      </button>
      <input type="number" name="Qty" value={qty} step="1" placeholder="0" onChange={handleChange} />
    </Grid>
  )
}
