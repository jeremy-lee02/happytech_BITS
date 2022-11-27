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
          <div className='hero-banner-container'>
            <Image src={img} layout='fill' className={'banner-img'} />
          </div>  
          <Carousel.Caption>
            <button type='button' className='btn1 btn btn-primary rounded'>Shop Now!</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner