import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { reviewsURL } from "../App";
import { nanoid } from "@reduxjs/toolkit";

const ReviewContainer = () => {
    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        fetch(reviewsURL)
            .then(r => r.json())
            .then(d => setReviewData(d));
    }, [])

    const arrayItems = reviewData.map((item) => {
        return (
                <div key={nanoid()} className="review">
                    <div>{item.rating}</div>
                    <p>{item.review}</p>
                    <p>{item.username}</p>
                </div>
        )
    })

    return (
        <div id="ReviewContainer">
            <Grid container rowSpacing={2} className="margin0">
                <Grid container item className='center' >
                    <Grid item className='main-section-title'>Customer Reviews</Grid>
                </Grid>
                <Grid item id="InnerReviewContainer">
                    {arrayItems}
                </Grid>
            </Grid>
        </div>
    )
}

export default ReviewContainer