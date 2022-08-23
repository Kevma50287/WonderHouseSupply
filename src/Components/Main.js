import React from 'react'
import PopProdContainer from '../Features/PopProdContainer'
import CategoryContainer from '../Features/CategoryContainer'
import ReviewContainer from '../Features/ReviewContainer'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 540,
            md: 1000,
            lg: 1250,
            xl: 1536
        }
    }
})

export default function Main({itemData}) {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CategoryContainer />
                <PopProdContainer itemData={itemData} />
                <ReviewContainer />
            </ThemeProvider>
        </div>
    )
}








