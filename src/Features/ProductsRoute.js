import React, { useState } from 'react';
import { Outlet} from 'react-router-dom';
import { theme } from '../Components/Main'
import { ThemeProvider } from '@mui/material';


//////////////////////////////// ROUTE LAYOUT /////////////////////////////////////

export default function ProductsRoute({ itemData, cartUpdateCallBackFunction }) {
    const [filter, setFilter] = useState({
        category: "None",
        brand: "None"
    })
    const [sortVal, setSortVal] = useState('0')

    const contextObj = {
        filter, setFilter,
        sortVal, setSortVal,
        itemData,
        cartUpdateCallBackFunction
    }

    // return (
    //     <ItemPage
    //         itemData={itemData}
    //         cartUpdateCallBackFunction={cartUpdateCallBackFunction}
    //     />
    // )
    return (
        <div className='main paddingSmall'>
            <ThemeProvider theme={theme}>
                <Outlet context={contextObj} />
            </ThemeProvider>
        </div>
    )
}