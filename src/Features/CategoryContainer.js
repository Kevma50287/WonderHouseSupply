import CategoryData from "../Components/CategoryData"
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

const CategoryContainer = () => {
    const categoryArray = CategoryData.map((item) => {
        return (
            <div key={nanoid()}>
                <img src={item.image} alt={`${item.image}`} width='250px' height='190px' />
                <p>{item.category}</p>
            </div>
        )
    });

    const RowOne = categoryArray.slice(0, 4).map((item) => {
        return (
            <Grid key={nanoid()} item>{item}</Grid>
        )
    })

    const RowTwo = categoryArray.slice(4, 8).map((item) => {
        return (
            <Grid key={nanoid()} item >{item}</Grid>
        )
    })

    console.log(RowOne, RowTwo)

    return (
        <div>
            <h1>Search By Category</h1>
            <Grid container>
                {RowOne}
            </Grid>
            <Grid container>
                {RowTwo}
            </Grid>
        </div>
    )
}

export default CategoryContainer