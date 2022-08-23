import React from 'react'
import { Grid } from '@mui/material'
import Cart from '../ProjectImajes/5 links center/Cart.png';

export default function ListItem({ item }) {
  const { name, price, numberInStock, image } = item
  return (
    <Grid item className='center-horizontal' >
      <img src={image} alt={`${name}`} className='main-image' />
      <p>${price}</p>
      <p>${numberInStock}</p>
      <p>${name}</p>
      <button className='button-style'>
        Learn More
      </button>
      <button className="header-button">
         Add to card<img src={Cart}/>
      </button>
    </Grid>
  )
}
