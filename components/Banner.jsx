import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { urlFor } from '../lib/client';


const Banner = ({banners}) => {
  return (
    <div className='container-fluid'>
      <Carousel>
        {banners.map(item => (
          <Carousel.Item>
            <div className='hero-banner-container'>
              <img src={urlFor(item.image)} className={'banner-img'} />
            </div>  
            <Carousel.Caption>
              <button type='button' className='btn1 btn btn-primary rounded'>{item.buttonText}</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner