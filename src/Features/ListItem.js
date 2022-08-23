import React from 'react'
import { Grid } from '@mui/material'

export default function ListItem({ item }) {
  const { name, price, numberInStock, image, description } = item
  return (
    <Grid item className='center-horizontal' >
      <img src={image} alt={`${name}`} className='main-image' />
      <p className='itemname'>{name}</p>
      <p className='itemprice'>${price}</p>
      <p className='itemstock'>{numberInStock} Items in stock</p>
      <p className='itemdetail'>{description}</p>
      <button className='button-style'>
        Learn More
      </button>
    </Grid>
  )
}
