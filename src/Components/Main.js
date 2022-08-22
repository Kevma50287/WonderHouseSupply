import React, { useEffect, useState } from 'react'
import PopProdContainer from '../Features/PopProdContainer'
import { itemURL } from '../App'
import CategoryContainer from '../Features/CategoryContainer'
import ReviewContainer from '../Features/ReviewContainer'

export default function Main() {
    const [itemData, setItemData] = useState([])

    useEffect (() => {
        fetch(itemURL)
        .then(r=>r.json())
        .then(d=>setItemData(d))
    }, [])

    

    console.log(itemData)

    return (
        <div>
            <h1>Main</h1>
            <CategoryContainer props={itemData} />
            <PopProdContainer props={itemData} />
            <ReviewContainer props={itemData} />
        </div>
    )
}
