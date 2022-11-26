import React from 'react'
import Image from 'next/image'
import image from '../public/image4.png'
import Carousel from 'react-bootstrap/Carousel';


const img = "https://cdn.discordapp.com/attachments/1036490378154618984/1045972306947747940/unknown.png"
const Banner = () => {
  return (
    <div className='container'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <div className='hero-banner-container text-center pointer'>
            <Image src={image} objectFit='responsive' width={230} height={230} />
          </div>  
          <Carousel.Caption>
            <h3 className='text-white'>First slide label</h3>
            <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Test */}
        <Carousel.Item>
          <div className='hero-banner-container text-center pointer'>
            <Image src={image} objectFit='responsive' width={230} height={230} />
          </div>  
          <Carousel.Caption>
            <h3 className='text-white'>Second slide label</h3>
            <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='hero-banner-container text-center pointer'>
            <Image src={image} objectFit='responsive' width={230} height={230} />
          </div>  
          <Carousel.Caption>
            <h3 className='text-white'>Third slide label</h3>
            <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}

export default Banner