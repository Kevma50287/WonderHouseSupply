import React from 'react'
import PopProdContainer from '../Features/PopProdContainer'
import CategoryContainer from '../Features/CategoryContainer'
import ReviewContainer from '../Features/ReviewContainer'
import { createTheme, ThemeProvider } from '@mui/material'
import CrazyProgram from '../CrazyProgram/CrazyProgram'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1080,
            lg: 1250,
            xl: 1536
        }
    }
})

export default function Main({ itemData }) {
    return (
        <div className='main'>
            <CrazyProgram />
            <br />
            <ThemeProvider theme={theme}>
                <CategoryContainer />
                <br />
                <br />
                <PopProdContainer itemData={itemData} />
                <br />
                <br />
                <ReviewContainer />
            </ThemeProvider>
        </div>
    )
}

export { theme }







