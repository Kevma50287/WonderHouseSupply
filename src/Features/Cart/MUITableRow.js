import { TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react'

const MUITableRow = ({ itemInCart, cartDeleteCallBackFunction, cartChangeNumberOfItemsCallBackFunction }) => {

    const { name, price, numberOfItemsToBuy, image, description, id, numberInStock } = itemInCart

    const [qtyCart, setQtyCart] = useState(numberOfItemsToBuy)

    function handleChangeTheNumber(e) {
        if (e.target.value > -1 && e.target.value < numberInStock) { setQtyCart(e.target.value) }
    }


    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="left" id="ProductCell">
                <img src={image} alt={`${name}`} width='200px' height='200px' />
                <div>
                    <p className='cartname'>{name}</p>
                    <p className='cartdetail'>{description}</p>
                </div>
            </TableCell>
            <TableCell align="left">${price}</TableCell>
            <TableCell align="left">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    cartChangeNumberOfItemsCallBackFunction(qtyCart, id, setQtyCart)
                    setQtyCart(e.target.value)
                }}>
                    <input type="number" name="Qty" value={qtyCart} step="1" onChange={handleChangeTheNumber} onBlur={() => setQtyCart(numberOfItemsToBuy)} id='quantitySelector' />
                    <input type='submit' hidden />
                </form>

            </TableCell>
            <TableCell align="left">{numberOfItemsToBuy * price}</TableCell>
            <TableCell align="left">
                <button onClick={() => cartDeleteCallBackFunction(id)} className="header-button">
                    Delete
                </button>
            </TableCell>
        </TableRow>
    )
}

export default MUITableRow