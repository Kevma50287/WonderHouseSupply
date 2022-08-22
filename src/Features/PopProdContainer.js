import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import { itemURL } from '../App'

export default function PopProdContainer() {
  const [itemData, setItemData] = useState([])

  useEffect(() => {
    fetch(itemURL)
      .then(r => r.json())
      .then(d => setItemData(d));
  }, [])

  const arrayItems = itemData.map((item) => {
    return (
      <ListItem item={item} key={item.id} />
    )
  })

  return (
    <div>
      <h3>Popular Products</h3>
      {arrayItems}
    </div>
  )
}
