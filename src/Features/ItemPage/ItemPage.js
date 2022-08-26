import { Grid } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import ListItem from '../ListItem'
import Filter from './Filter'
import CategoryData from '../../Components/CategoryData'
import Sort from './Sort'
import { useOutletContext } from 'react-router-dom'
import PaginationRounded from './Pagination'

//Component
const ItemPage = () => {
  ////////////////////////// FUNCTIONS ///////////////////////////////

  //Function to return an array of keys when given and array and key

  const getUnique = (arr, key) => {
    let unique = []
    arr.forEach(element => {
      if (unique.includes(element[key])) { return }
      else { unique.push(element[key]) }
    });
    return unique
  }

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

  //Searching

  const searchArr = (arr, search) => {
    if (search) {
      return arr.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return arr
    }
  }


  //////////////////////////// RENDER COMPONENT //////////////////////////////

  const { sortVal, filter, itemData, cartUpdateCallBackFunction, setSortVal, setFilter, search } = useOutletContext()

  const [currPage, setCurrPage] = useState(1)

   //When filters are applied, reset to first page
   useEffect(() => {
    setCurrPage(1)
  }, [sortVal, filter, search])

  const uniqueBrands = getUnique(itemData, 'brand')

  const uniqueCategories = getUnique(CategoryData, 'category').map((item) => item.toLowerCase())

  const searchedItems = searchArr(itemData, search)

  const filteredItems = filterArray(searchedItems, filter)

  const sortedItems = sortArr(filteredItems)

  //Pagination params
  const numItems = sortedItems.length
  const totalPages = Math.ceil(numItems / 6)

  //Pagination function
  const getCurrPageItems = (array, page, numItems) => {
    let newArr = []
    for (let i = ((page * 6) - 6); i < page * 6 && i < numItems; i++) {
      const element = array[i];
      if (element !== undefined) {
        newArr.push(element)
      } else {
        return newArr
      }
    }
    return newArr
  }

  const currPageItems = getCurrPageItems(sortedItems, currPage, numItems)

  //Get Array of Components
  const arrayItems = currPageItems.map((item) => {
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
    <>
      <Sort sortVal={sortVal} setSortVal={setSortVal} />
      <Grid container columnSpacing={1}  >
        <Grid container className='box-shadow margin10'>
              
              <Grid item xs={12} sm={12} >
                  <div className='not-full-screen-container-two'>
                      <div className='flex flex-column bannerText'>
                          <h1 className='center font-highlight-color'>All Products</h1>
                          {/* <p className='center font-highlight-color'> Call Us: 718-xxx-xxx</p> */}
                      </div>
                  </div>
              </Grid>
          
          </Grid>
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
          columnSpacing={3} rowSpacing={3}
          className="margin10"
        >
          {arrayItems}
        </Grid>
      </Grid>
      <PaginationRounded handleChange={setCurrPage} currPage={currPage} totalPages={totalPages} />
    </>
  )
}

export default ItemPage