import ListItem from './ListItem'
import { Grid } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

export default function PopProdContainer({ itemData }) {
  const firstFour = itemData.slice(0, 4)

  const arrayItems = firstFour.map((item) => {
    return (
      <Grid key={nanoid()} container item xs={12} sm={6} md={3} className='center'>
        <ListItem item={item} key={item.id} />
      </Grid>
    )
  })

  return (
    <div className="margin10">
      <Grid container rowSpacing={1}>
        <Grid container item className='center' >
          <Grid item className='main-section-title'>Popular Products</Grid>
        </Grid>
        {arrayItems}
      </Grid>

    </div>
  )
}
