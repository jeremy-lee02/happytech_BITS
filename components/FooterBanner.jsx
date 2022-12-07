import React from 'react'
import Link from 'next/link'
import  Image from 'next/image'

const FooterBanner = () => {
  return (
    <div className='footer-banner-container container-fluid'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>Shop with us!</h3>
          <p>Anywhere, Anytime</p>
        </div>
        <div className='right'>
          <h3>Description: </h3>
          <p>Best desktop gears on the market</p>
        </div>
          <Image src={'/../public/logo.png'} fill objectFit='contain' className='footer-banner-image' alt='logo' />
      </div>
    </div>
  )
}

export default FooterBanner