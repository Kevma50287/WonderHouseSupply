import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import MUITableRow from './MUITableRow'
import Paper from '@mui/material/Paper';

export default function Cart({ userData, itemData, cartDeleteCallBackFunction, cartChangeNumberOfItemsCallBackFunction }) {
  //get our cart info
  const { Cart } = userData

  let newArrayOfIds = Cart.map((item) => {
    return `${item.id}`
  })

  let cartItems = itemData.filter((item) => {
    if (newArrayOfIds.includes(`${item.id}`)) {
      let myObj = Cart.find(el => el.id === `${item.id}`)
      let numberOfItemsToBuy = myObj.numberOfItemsToBuy
      item.numberOfItemsToBuy = numberOfItemsToBuy
      return item
    } else {
      return false
    }
  })

  console.log(cartItems)

  const itemRows = cartItems.map((itemInCart) => {
    return (
      <MUITableRow
        key={itemInCart.name}
        itemInCart={itemInCart}
        cartDeleteCallBackFunction={cartDeleteCallBackFunction}
        cartChangeNumberOfItemsCallBackFunction={cartChangeNumberOfItemsCallBackFunction}
      />
    )
  })


  return (
    <div id="myCard" className='main'>
      {/* <ul>{
        cartItems.map((itemInCart) => < CartItem key={itemInCart.name} itemInCart={itemInCart} cartDeleteCallBackFunction={cartDeleteCallBackFunction} cartChangeNumberOfItemsCallBackFunction={cartChangeNumberOfItemsCallBackFunction} />)
      }</ul> */}
      <TableContainer component={Paper} id="CartTable" >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">PRODUCT</TableCell>
              <TableCell align="left">PRICE</TableCell>
              <TableCell align="left">QUANTITY</TableCell>
              <TableCell align="left">TOTAL</TableCell>
              <TableCell align="left">REMOVE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemRows.length > 0 ? itemRows : <h5>Cart is empty...</h5>}
          </TableBody>
        </Table>
      </TableContainer>
      <div id='checkoutContainer' className='box-shadow'>

        <button className='button-style'>Checkout</button>
      </div>
    </div>
  )
}
