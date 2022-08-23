import { Grid } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import ListItem from '../ListItem'
import Filter from './Filter'
import CategoryData from '../../Components/CategoryData'
import Sort from './Sort'

const ItemPage = ({ itemData }) => {
  const [filter, setFilter] = useState({
    category: "None",
    brand: "None"
  })

  console.log(itemData)
  const getUnique = (arr, key) => {
    let unique = []
    arr.forEach(element => {
      if (unique.includes(element[key])) { return }
      else { unique.push(element[key]) }
    });
    return unique
  }

  const uniqueBrands = getUnique(itemData, 'brand')
  const uniqueCategories = getUnique(CategoryData, 'category').map((item) => item.toLowerCase())


  const arrayItems = itemData.map((item) => {
    return (
      <Grid
        key={nanoid()}
        container item
        xs={12} sm={6} md={4}
        className='center'
      >
        <ListItem item={item} key={item.id} />
      </Grid>
    )
  })

  return (
    <div>
      <Sort />
      <Grid container  >
        <Grid
          item container
          xs={3} sm={3} md={3}
          columnSpacing={0}
        >
          <Filter
            setFilter={setFilter}
            filter={filter}
            uniqueBrands={uniqueBrands}
            uniqueCategories={uniqueCategories}
          />
        </Grid>
        <Grid
          item container
          xs={9} sm={9} md={9}
          columnSpacing={3} rowSpacing={6}
          className="margin10"
        >
          {arrayItems}
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemPage