import { Grid } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import ListItem from '../ListItem'
import Filter from './Filter'

const ItemPage = ({ itemData }) => {
  const [filter, setFilter] = useState("All")

  const arrayItems = itemData.map((item) => {
    return (
      <Grid key={nanoid()} container item xs={12} sm={6} md={4} className='center'>
        <ListItem item={item} key={item.id} />
      </Grid>
    )
  })

  return (
    <>
      <Grid container  >
        <Grid item container xs={3} sm={3} md={3}>
          <Filter setFilter={setFilter} filter={filter} />
        </Grid>
        <Grid item container xs={9} sm={9} md={9} columnSpacing={3} rowSpacing={6} className="margin10">
          {arrayItems}
        </Grid>
      </Grid>
    </>
  )
}

export default ItemPage