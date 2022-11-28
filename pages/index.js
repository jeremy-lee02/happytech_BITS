import React from 'react'
import{BestProducts, FooterBanner, Banner} from '../components/index'
import { client } from '../lib/client'


export default function Home({banners, products, bestSellingProducts}) {
  return (
    <div className='container-fluid home'>
      <Banner banners={banners} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
      </div>
      <div className='products-container'>
        {bestSellingProducts?.slice(0,6).map((product)=> <BestProducts key={product._id} products= {product} />)}
      </div>
      <FooterBanner />
    </div>
  )
}

export const getServerSideProps = async () =>{
  
  const query = '*[_type == "products"]'
  const products = await client.fetch(query)
  const bestSellingProducts = products.sort((a,b)=> b.sales - a.sales)

  const queryBanner = '*[_type == "banner"]'
  const banners = await client.fetch(queryBanner)

  return {
    props: {banners, products, bestSellingProducts }
  }

}
