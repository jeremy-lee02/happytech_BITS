import React from 'react'
import{Products, FooterBanner, Banner} from '../components/index'


export default function Home() {
  return (
    <div className='container-fluid'>
      Happy Tech
      <Banner />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
      </div>
      <div className='products-container'>
        <Products />
      </div>
      <FooterBanner />
    </div>
  )
}
