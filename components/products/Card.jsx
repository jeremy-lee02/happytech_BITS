import React from 'react'
import { urlFor } from '../../lib/client'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Card({products}) {
    const router = useRouter()
    const check = (value) =>{
        if(value) return "Available"
        return "Out of stock"
      }
    return (
        <>
            {products.length > 1? products.map(item=>(
                <div class="card item-wrapper col-lg-3 p-1">
                    <img class="w-100 h-75" src={urlFor(item.image[0])}/>
                    <div class="card-body">
                        <Link href={`/product/${item.slug.current}`}>
                            <h4 class="card-title">{item.name}</h4>
                        </Link>
                        <h4 className={`fs-5 ${item.available? 'text-success': 'text-danger'} pt-2`}>{check(item.available)}</h4>
                        <h4 className='fs-5 pt-2 '>
                        Price:
                        <span> {item.price}$</span>
                        </h4>
                        <button className='btn btn-outline-secondary btn-sm d-flex justify-content-center mt-3'
                        disabled ={!item.available}>
                        <i className="image fas fa-cart-plus mr-2"></i>
                        Add to Cart</button>
                    </div>
                </div>
            )):(
                <>
                    <div className='error-wrapper '>
                        <h2 className='m-auto d-flex justify-content-center p-5'>404 Invalid path: 
                            <span className='text-danger'> {router.asPath}</span>
                        </h2>
                    </div>
                </>
            )}
        </>
        




    )
    
}

