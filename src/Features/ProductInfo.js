import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { itemURL } from '../App'
import Cart from '../ProjectImajes/5 links center/Cart.png';

const ProductInfo = ({cartUpdateCallBackFunction}) => {
    const {qty, setQty, handleChange } = useOutletContext()
    const navigate = useNavigate()
    const [infoDisplay, setInfoDisplay] = useState('Details')
    const [itemData, setItemData] = useState({
        "name": "",
        "placeText": "",
        "price": "",
        "numberInStock": "",
        "description": "",
        "specifications": "",
        "howToUse": "",
        "category": "",
        "finish": "",
        "type": "",
        "brand": "",
        "image": "",
        "id": "",
    })
    const { productId } = useParams()

    useEffect(() => {
        fetch(`${itemURL}/${productId}`)
            .then(r => r.json())
            .then(d => {
                if (Object.keys(d).length === 0) {
                    navigate('/NotFound')
                } else {
                    setItemData(d)
                }
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    const { name, image, numberInStock, description, price, specifications, howToUse } = itemData


    return (
        <>
            <Grid container  >
                <Grid item xs={12} sm={8} md={8} lg={6} className="flex">
                    <img src={image} alt="item" className='center-image' />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={6} className="flex" id="BasicProductBox">
                    <h1>{name}</h1>
                    <div>{description}</div>
                    <div>{numberInStock} items in stock</div>
                    <h2>${price}</h2>
                    <button onClick={() => cartUpdateCallBackFunction(qty, productId, setQty)} className="cartIcon">
                        Add to cart<img src={Cart} alt='add to cart' />
                    </button>
                    <input type="number" name="Qty" value={qty} step="1" placeholder="0" onChange={handleChange} />
                </Grid>
            </Grid>

            <br />
            <br />
            <br />

            <Grid container className='InfoContainer'>
                <Grid item xs={4} sm={4} md={4} lg={4} className="flex">
                    <div className={infoDisplay === 'Details' ? 'MoreInfoProductBoxSelected' : 'MoreInfoProductBox'} onClick={() => setInfoDisplay('Details')}>Details</div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} className="flex">
                    <div className={infoDisplay === 'Specifications' ? 'MoreInfoProductBoxSelected' : 'MoreInfoProductBox'} onClick={() => setInfoDisplay('Specifications')}>Specifications</div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} className="flex">
                    <div className={infoDisplay === 'Howto' ? 'MoreInfoProductBoxSelected' : 'MoreInfoProductBox'} onClick={() => setInfoDisplay('Howto')}>How to Use</div>
                </Grid>
            </Grid>

            <br />

            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} className="flex">
                    {infoDisplay === 'Details' && <div>{description}</div>}
                    {infoDisplay === 'Specifications' && <div>{specifications}</div>}
                    {infoDisplay === 'Howto' && <div>{howToUse}</div>}
                </Grid>
            </Grid>
        </>
    )

}

export default ProductInfo