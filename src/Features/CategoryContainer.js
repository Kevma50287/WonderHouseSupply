import CategoryData from "../Components/CategoryData"
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

const CategoryContainer = () => {
    const categoryArray = CategoryData.map((item) => {
        return (
            <div key={nanoid()}>
                <img src={item.image} alt={`${item.image}`} className="blackborder main-image" />
                <p className="darkTag">{item.category}</p>
            </div>
        )
    });

    const RowOne = categoryArray.slice(0, 4).map((item) => {
        return (
            <Grid key={nanoid()} xs={12} sm={6} md={3} item>{item}</Grid>
        )
    })

    const RowTwo = categoryArray.slice(4, 8).map((item) => {
        return (
            <Grid key={nanoid()} xs={12} sm={6} md={3} item >{item}</Grid>
        )
    })

    console.log(RowOne, RowTwo)

    return (
        <div className="margin10">
            <Grid container rowSpacing={2}>
                <Grid container item className='center' >
                    <Grid item className='main-section-title'>Search By Category</Grid>
                </Grid>
                <Grid container item>
                    {RowOne}
                </Grid>
                <Grid container item>
                    {RowTwo}
                </Grid>
            </Grid>
        </div>
    )
}

export default CategoryContainer