import { Grid } from '@mui/material';
import React from 'react';


export default function AboutRoute() {
    return (
        <>
            <h1 className='main'>About</h1>
            <Grid container>
                <Grid item sm={6}>
                    <h1>Special thanks to Tsering for helping</h1>
                </Grid>
                <Grid item sm={6}>
                    <div>
                        <img src = "../../../CrazyProgram/images/store.jpg" alt =""/>
                    </div>
                </Grid>
            </Grid>
        </>

    )
}