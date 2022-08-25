import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { theme } from '../Components/Main'
import { ThemeProvider } from '@mui/material';


//////////////////////////////// ROUTE LAYOUT /////////////////////////////////////

export default function ProductsRoute({ itemData}) {
    const { state } = useLocation()
    const [filter, setFilter] = useState({
        category: state ? state.category ? state.category.toLowerCase() : 'None' : 'None',
        brand: "None",
    })

    let search = null

    if (state !== null) {
        if (state['search']) {
            search = state['search']
        }
    }

    const [sortVal, setSortVal] = useState('0')

    //state for quality of itimes
    const [qty, setQty] = useState("1")

    function handleChange(e, numberInStock) {
        if (e.target.value > -1 && parseInt(e.target.value) < numberInStock) {setQty(e.target.value)}
    }


    const contextObj = {
        filter, setFilter,
        sortVal, setSortVal,
        itemData,
        search,
        qty, setQty, handleChange
    }

    return (
        <div className='main paddingSmall'>
            <ThemeProvider theme={theme}>
                <Outlet context={contextObj} />
            </ThemeProvider>
        </div>
    )
}