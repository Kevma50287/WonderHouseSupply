import React from 'react'

export default function ListItem({item}) {
  const {name, price, numberInStock} = item
  return (
    <div>
      <img src='' alt='' />
      <p>${price}</p>
      <p>${numberInStock}</p>
      <p>${name}</p>
      <button>Learn More</button>
    </div>
  )
}
