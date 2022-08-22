import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { reviewsURL } from "../App";

const ReviewContainer = () => {
    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        fetch(reviewsURL)
            .then(r => r.json())
            .then(d => setReviewData(d));
    }, [])

    const arrayItems = reviewData.map((item) => {
        return (
            <Grid item>{item}</Grid>
        )
    })

    return (
        <div>
            <h1>ReviewContainer</h1>
            <Grid container>
                {arrayItems}
            </Grid>

        </div>
    )
}

export default ReviewContainer