import React from 'react';
import image34 from './images/image34.png';
import image74 from './images/image74.png';
import image77 from './images/image77.png';
import image76 from './images/image76.png';
import image75 from './images/image75.png';
import image78 from './images/image78.png';
import image79 from './images/image79.png';
import image73 from './images/image73.png';
import image72 from './images/image72.png';
import image82 from './images/image82.png';
import image84 from './images/image84.png';
import image83 from './images/image83.png';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ServicesRoute() {
    return (
        // <h1 className='main'>ServicesRoute!</h1>
        <div className="kevinHelps">
      <section >
        <Grid container className='box-shadow margin10'>
          
          <Grid item xs={12} sm={12} >
            <div className='not-full-screen-container'>
                <div className='flex flex-column bannerText'>
                    <h1 className='center font-highlight-color'>Home Services at Affordable Rates</h1>
                    <p className='center font-highlight-color'> Call Us: 718-xxx-xxx</p>
                    <Link to='/products'>
                        <button className='button-style center'>
                        Contact Us
                        </button>
                    </Link>
                </div>
            </div>
          </Grid>
         
        </Grid>

        <Grid container id="bannerIcons" className='margin10 center' rowSpacing={3} columnSpacing={3}>
          <Grid item xs={12} sm={6} md={3} className='flex justify' >
             <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image74} alt="" data-image-width="257" data-image-height="58"></img>
                    <h3 className='center font-highlight-color'>Toilets</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image77} alt="" data-image-width="92" data-image-height="92"></img>
                    <h3 className='center font-highlight-color'>Doors</h3>
            </div>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image76} alt="" data-image-width="112" data-image-height="102"></img>
                    <h3 className='center font-highlight-color'> Key Copies</h3>
            </div>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image75} alt="" data-image-width="198" data-image-height="31"></img>
                    <h3 className='center font-highlight-color'>Windows</h3>
            </div>
          </Grid>
          <Grid item  xs={12} sm={6} md={3}>
            <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image78} alt="" data-image-width="201" data-image-height="49"></img>
                    <h3 className='center font-highlight-color'>Roofing</h3>
            </div>
          </Grid>
          <Grid item  xs={12} sm={6} md={3}>
             <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image79} alt="" data-image-width="100" data-image-height="54"></img>
                    <h3 className='center font-highlight-color'>Sink and Faucets</h3>
            </div>
          </Grid>
          <Grid item  xs={12} sm={6} md={3}>
            <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image73} alt="" data-image-width="200" data-image-height="44"></img>
                    <h3 className='center font-highlight-color'>Flooring</h3>
            </div>
          </Grid>
          <Grid item  xs={12} sm={6} md={3}>
            <div className='flex flex-column bannerText'>
                    <img className="center bannerImage" src={image72} alt="" data-image-width="200" data-image-height="44"></img>
                    <h3 className='center font-highlight-color'>Water Heaters</h3>
            </div>
          </Grid>
         
                <button className='button-style center'>
                  Contact Us
                </button>
                
        </Grid>
      </section>
                <div className='flex flex-column bannerText'>
                    <h1 className='center font-highlight-color'> Find the Perfect Solution for your Home Repairs</h1>
                </div>
                <Grid container id="bannerIcons" className='margin10 center' rowSpacing={3} columnSpacing={3}>
                            <Grid item  xs={12} sm={6} md={3}>
                        <div className='flex flex-column bannerText'>
                            <img className="center bannerImage" src={image82} ></img>
                            <h3 >How to Paint your Walls</h3>
                        </div>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={3}>
                        <div className='flex flex-column bannerText'>
                            <img className="center bannerImage" src={image83} ></img>
                            <h3 >How to Install Toilet</h3>
                        </div>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={3}>
                        <div className='flex flex-column bannerText'>
                            <img className="center bannerImage" src={image84} ></img>
                            <h3 >How to use a Caulk Gun</h3>
                        </div>
                    </Grid>
          </Grid>
    </div>
    )
}