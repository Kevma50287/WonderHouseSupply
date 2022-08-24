import React from 'react';
import ItemPage from './ItemPage/ItemPage';


export default function ProductsRoute({ itemData, cartUpdateCallBackFunction }) {

    return (
        <ItemPage
            itemData={itemData}
            cartUpdateCallBackFunction={cartUpdateCallBackFunction}
        />
    )
}