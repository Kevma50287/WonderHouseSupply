import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { theme } from '../Components/Main'
import { ThemeProvider } from '@mui/material';


//////////////////////////////// ROUTE LAYOUT /////////////////////////////////////

export default function ProductsRoute({ itemData, cartUpdateCallBackFunction }) {
    const { state } = useLocation()

    const [filter, setFilter] = useState({
        category: "None",
        brand: "None",
    })

    let search = null

    console.log(state, state.category)

    if (state !== null) {
        if (state.category !== undefined) {
            setFilter({ ...filter, category: state.category.toLowerCase()})
        } else {
            search = state['search']
        }
    }

    const [sortVal, setSortVal] = useState('0')


    const contextObj = {
        filter, setFilter,
        sortVal, setSortVal,
        itemData,
        cartUpdateCallBackFunction,
        search
    }

    return (
        <div className='main paddingSmall'>
            <ThemeProvider theme={theme}>
                <Outlet context={contextObj} />
            </ThemeProvider>
        </div>
    )
}