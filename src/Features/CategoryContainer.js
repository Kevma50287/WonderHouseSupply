import CategoryData from "../Components/CategoryData"
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const CategoryContainer = () => {
    const navigate = useNavigate()
    
    const goToProduct = (e) => {
        navigate('/products', {
            state: {
                category:e.target.name
            }
        })
    }

    const categoryArray = CategoryData.map((item) => {
        return (
            <div key={nanoid()} className='categoryflex center'>
                <img onClick={goToProduct} src={item.image} name={item.category} alt={`${item.image}`} className="blackborder main-image pointer" />
                <p onClick={goToProduct} className="darkTag pointer" name={item.category} >{item.category}</p>
            </div>
        )
    });

    const RowOne = categoryArray.slice(0, 4).map((item) => {
        return (
            <Grid key={nanoid()} xs={12} sm={6} md={3} item className='flex'>{item}</Grid>
        )
    })

    const RowTwo = categoryArray.slice(4, 8).map((item) => {
        return (
            <Grid key={nanoid()} xs={12} sm={6} md={3} item className='flex'>{item}</Grid>
        )
    })

    console.log(RowOne, RowTwo)

    return (
        <div className="margin10">
            <Grid container>
                <Grid container item className='center' >
                    <Grid item >
                        <div className='main-section-title'>Search By Category</div>
                    </Grid>
                </Grid>
                <Grid container item >
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