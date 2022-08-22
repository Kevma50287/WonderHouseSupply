import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import { itemURL } from '../App'
import { Grid } from '@mui/material'

export default function PopProdContainer() {
  const [itemData, setItemData] = useState([])

  useEffect(() => {
    fetch(itemURL)
      .then(r => r.json())
      .then(d => setItemData(d));
  }, [])

  const arrayItems = itemData.map((item) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <ListItem item={item} key={item.id} />
      </Grid>
    )
  })

  return (
    <div className="margin10">
      <Grid container rowSpacing={2}>
        <Grid container item className='center' >
          <Grid item className='main-section-title'>Popular Products</Grid>
        </Grid>
        <Grid container item>
          {arrayItems}
        </Grid>
      </Grid>

    </div>
  )
}
