import { Grid, ThemeProvider } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import ListItem from '../ListItem'
import Filter from './Filter'
import CategoryData from '../../Components/CategoryData'
import Sort from './Sort'
import { theme } from '../../Components/Main'

//Function to return an array of keys when given and array and key

const getUnique = (arr, key) => {
  let unique = []
  arr.forEach(element => {
    if (unique.includes(element[key])) { return }
    else { unique.push(element[key]) }
  });
  return unique
}

//Component
const ItemPage = ({ itemData, cartUpdateCallBackFunction }) => {
  const [filter, setFilter] = useState({
    category: "None",
    brand: "None"
  })
  const [sortVal, setSortVal] = useState('0')

  const uniqueBrands = getUnique(itemData, 'brand')
  const uniqueCategories = getUnique(CategoryData, 'category').map((item) => item.toLowerCase())

  //Filtering
  const filterArray = (arr, filter) => {

    if (filter.category !== "None") {
      arr = arr.filter((item) => {
        return item.category === filter.category
      })
    }

    if (filter.brand !== "None") {
      arr = arr.filter((item) => {
        return item.brand === filter.brand
      })
    }

    return arr
  }

  const filteredItems = filterArray(itemData, filter)

  //Sorting

  const sortArr = (arr) => {
    let sorted = [...arr]
    switch (sortVal) {
      case "1":
        return sorted.sort((a, b) => {
          const A = a.price
          const B = b.price
          return A - B
        })
      case "2":
        return sorted.sort((a, b) => {
          const A = a.price
          const B = b.price
          return B - A
        })
      case "3":
        return sorted.sort((a, b) => {
          const A = a.name
          const B = b.name
          return A.localeCompare(B)
        })
      case "4":
        return sorted.sort((a, b) => {
          const A = a.name
          const B = b.name
          return B.localeCompare(A)
        })
      default:
        return sorted
    }
  }

  const sortedItems = sortArr(filteredItems)

  const arrayItems = sortedItems.map((item) => {
    return (
      <Grid
        key={nanoid()}
        container item
        xs={12} sm={6} md={4}
        className='center'
      >
        <ListItem item={item} key={item.id} cartUpdateCallBackFunction={cartUpdateCallBackFunction} />
      </Grid>
    )
  })

  return (
    <div className='main paddingSmall'>
      <Sort sortVal={sortVal} setSortVal={setSortVal} />
      <ThemeProvider theme={theme}>
        <Grid container columnSpacing={1}  >
          <Grid
            item container
            xs={3} sm={3} md={3}
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
            columnSpacing={2} rowSpacing={2}
            className="margin10"
          >
            {arrayItems}
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export { getUnique }
export default ItemPage