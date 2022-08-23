import { Grid } from '@mui/material'
import React from 'react'

const Filter = ({setFilter, filter}) => {
  const handleChange = (e) => {
    setFilter(e.target.value)
  }
  
  return (
    <Grid item>
      <form>
        <label htmlFor='filterSelect'>Filter By:</label>
        <select style={{display: 'block'}} >
          <option>1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
        <select style={{display: 'block'}}>
          <option>1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </form>
    </Grid>

  )
}

export default Filter