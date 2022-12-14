import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useEffect } from 'react'

const BestProducts = ({products: {image,name,slug,price, type}}) => {

  useEffect(()=>{

    console.log(urlFor(image && image[0]))
  },[])

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src= {urlFor(image && image[0])} width = {350} height = {350} className= "product-image" alt= {name} />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default BestProducts