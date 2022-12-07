import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const BestProducts = ({products: {image,name,slug,price, type}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src= {urlFor(image && image[0])} width = {300} height = {300} className= "product-image" alt= {name} />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default BestProducts