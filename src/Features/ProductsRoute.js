import React from 'react';
import ItemPage from './ItemPage/ItemPage';


export default function ProductsRoute({itemData}) {
    return (
        <ItemPage itemData={itemData} />
    )
}