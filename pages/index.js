import React, {useEffect} from 'react'
import{BestProducts, FooterBanner, Banner} from '../components/index'
import { client } from '../lib/client'
import { useStateContext } from '../context/StateContext'


export default function Home({banners, products, bestSellingProducts}) {

  const {setProducts} = useStateContext()
  useEffect(()=>{
    setProducts(products)
  },[])
  return (
    <div className='container-fluid home'>
      <Banner banners={banners} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
      </div>
      <div className='products-container'>
        {bestSellingProducts?.slice(0,10).map((product)=> <BestProducts key={product._id} products= {product} />)}
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

  // console.log(products[0].image, products[0].name)

  return {
    props: {banners, products, bestSellingProducts }
  }
}
