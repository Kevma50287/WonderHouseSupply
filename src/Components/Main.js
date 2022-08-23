import React from 'react'
import PopProdContainer from '../Features/PopProdContainer'
import CategoryContainer from '../Features/CategoryContainer'
import ReviewContainer from '../Features/ReviewContainer'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 800,
            md: 1140,
            lg: 1250,
            xl: 1536
        }
    }
})

export default function Main({itemData}) {
    return (
        <div className='main'>
            <ThemeProvider theme={theme}>
                <CategoryContainer />
                <PopProdContainer itemData={itemData} />
                <ReviewContainer />
            </ThemeProvider>
        </div>
    )
}

export {theme}







