import React from 'react'
import defaultlogo from './images/defaultlogo.png';
import Frame from './images/Frame.png';
import Frame1 from './images/Frame1.png';
import Frame2 from './images/Frame2.png';
import g48032 from './images/g48032.png';
import image33 from './images/image33.png';
import image36 from './images/image36.png';
import image39 from './images/image39.png';
import Page1 from './images/Page1.png';
import Vector from './images/Vector.png';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const CrazyProgram = () => {
  return (
    <div className="kevinHelps">
      <section >
        <Grid container className='box-shadow margin10'>
          <Grid item xs={12} sm={4} >
            <img id= 'image36' src={image36} alt="" data-image-width="424" data-image-height="635"></img>
          </Grid>
          <Grid item xs={12} sm={4} >
            <div className='flex flex-column bannerText'>
              <h1 className='center font-highlight-color'> Find the Perfect Solution for your Home Repairs</h1>
              <p> At Wonder House Supply Inc. we offer experienced advice and recommendations for any common home repairs that you may have.</p>
              <Link to='/products'>
                <button className='button-style center'>
                  View All Products
                </button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className='flex flex-column'>
            <img id='image39' src={image39} alt="banner 2"></img>
          </Grid>
        </Grid>

        <Grid container id="bannerIcons" className='margin10 center' rowSpacing={3} columnSpacing={3}>
          <Grid item sm={3} className='flex justify' >
            <img className="center bannerImage" src={Frame} alt="" data-image-width="257" data-image-height="58"></img>
          </Grid>
          <Grid item sm={3}>
            <img className="center bannerImage" src={Vector} alt="" data-image-width="92" data-image-height="92"></img>
          </Grid>
          <Grid item sm={3}>
            <img className="center bannerImage" src={image33} alt="" data-image-width="112" data-image-height="102"></img>
          </Grid>
          <Grid item sm={3}>
            <img className="center bannerImage" src={g48032} alt="" data-image-width="198" data-image-height="31"></img>
          </Grid>
          <Grid item  sm={4}>
            <img className="center bannerImage" src={Frame1} alt="" data-image-width="201" data-image-height="49"></img>
          </Grid>
          <Grid item  sm={4}>
            <img className="center bannerImage" src={Page1} alt="" data-image-width="100" data-image-height="54"></img>
          </Grid>
          <Grid item  sm={4}>
            <img className="center bannerImage" src={Frame2} alt="" data-image-width="200" data-image-height="44"></img>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default CrazyProgram

