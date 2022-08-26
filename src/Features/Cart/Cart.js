import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import MUITableRow from './MUITableRow'
import Paper from '@mui/material/Paper';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Cart({ userData, itemData, cartDeleteCallBackFunction, cartChangeNumberOfItemsCallBackFunction }) {

  const navigate = useNavigate()

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

  const getCartTotal = (cart) => {
    let total = 0
    console.log(cart)
    cart.forEach((item) => {
      let itemtotal = item.numberOfItemsToBuy * item.price
      total = total + itemtotal
    })
    return total
  }

  const cartTotal = getCartTotal(cartItems)

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
      <Grid container>
        <Grid item xs={9} sm={9} md={9}>
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
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div id='checkoutContainer' className='box-shadow2'>
            <p id='subtotal' className='center'> Subtotal: $ {cartTotal}</p>
            <div className='center'>
              <button id='checkoutButton' className='button-style' onClick={()=>navigate('./confirmation')} disabled={Cart?.length > 0 ? false:true} >Checkout</button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  )
}
