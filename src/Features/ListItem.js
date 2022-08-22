import React from 'react'

export default function ListItem({item}) {
  const {name, price, numberInStock, image} = item
  return (
    <div>
      <img src={image} alt={`${name}`} className='main-image'/>
      <p>${price}</p>
      <p>${numberInStock}</p>
      <p>${name}</p>
      <button>Learn More</button>
    </div>
  )
}
