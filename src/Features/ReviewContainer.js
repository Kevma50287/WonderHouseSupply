import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { reviewsURL } from "../App";
import { nanoid } from "@reduxjs/toolkit";
import { Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";


const ReviewContainer = () => {
    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        fetch(reviewsURL)
            .then(r => r.json())
            .then(d => setReviewData(d));
    }, [])

    const arrayItems = reviewData.map((item) => {
        let totalStars = []
        for (let index = 0; index < parseInt(item.rating); index++) {
            totalStars.push(<Star key={nanoid()} sx={{ color: yellow[700] }} />)
        }

        return (
            <div key={nanoid()} className="review">
                <div>{totalStars}</div>
                <p className="userReview">{item.review}</p>
                <p className="reviewUserTag"> - {item.username}</p>
            </div>
        )
    })

    return (
        <div id="ReviewContainer">
            <Grid container rowSpacing={2} className="margin0">
                <Grid container item className='center' >
                    <Grid item className='main-section-title'>Customer Reviews</Grid>
                </Grid>
                <Grid item id="InnerReviewContainer" sm={12}>
                    {arrayItems}
                </Grid>
            </Grid>
        </div>
    )
}

export default ReviewContainer