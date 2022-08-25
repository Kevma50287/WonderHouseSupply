import { Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { nanoid } from '@reduxjs/toolkit';

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

const Filter = ({ setFilter, filter, uniqueCategories, uniqueBrands }) => {
  const handleChange = (e) => {
    const newObjValue = { [e.target.name]: e.target.value }
    console.log(newObjValue)
    setFilter({ ...filter, ...newObjValue })
  }


  const brandItems = uniqueBrands.map(item => {
    return (
      <MenuItem key={nanoid()} value={item}>{toTitleCase(item)}</MenuItem>
    )
  })

  const categoryItems = uniqueCategories.map(item => {
    return (
      <MenuItem key={nanoid()} value={item}>{toTitleCase(item)}</MenuItem>
    )
  })

  return (
    <Grid item id='filtercolumn'>
      <h3 className='filterby'>Filter By:</h3>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="CategorySelect">Category</InputLabel>
        <Select
          labelId="CategorySelect"
          id="CategorySelect"
          value={filter.category}
          label="Category"
          name='category'
          onChange={handleChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {categoryItems}
          
        </Select>
      </FormControl>
      <br></br>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="BrandSelectLabel">Brand</InputLabel>
        <Select
          labelId="BrandSelectLabel"
          id="BrandSelect"
          value={filter.brand}
          label="Brand"
          name='brand'
          onChange={handleChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {brandItems}
        </Select>
      </FormControl>
    </ Grid>
  )
}

export { toTitleCase }
export default Filter