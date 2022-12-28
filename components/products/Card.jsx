import React from 'react'
import { urlFor } from '../../lib/client'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext';


export default function Card({products}) {
    const router = useRouter()
    const {onAdd} = useStateContext()

    // Return if the product is available or not
    const check = (value) =>{
        if(value) return "Available"
        return "Out of stock"
    }
    return (
        <>
            {products.length > 1? products.map(item=>(
                // Return all the product with different colors
                <React.Fragment key={item._id}>
                    <div className="card item-wrapper col-lg-2 col-8 p-1 cat-container">
                        <img className="w-100 rounded image-cat " src={urlFor(item.image[0])}/>
                        <div className="card-body mt-5">
                            <Link href={`/product/${item.slug.current}`}>
                                <h4 className="card-title">{item.name} 
                                    <span> {item.color.length > 1? "x Multiple Color": ""}</span>
                                </h4>
                            </Link>
                            <h4 className={`fs-5 ${item.available? 'text-success': 'text-danger'} pt-2`}>{check(item.available)}</h4>
                            <h4 className='fs-5 pt-2 '>
                            Price:
                            <span> {item.price}$</span>
                            </h4>
                            <button 
                            className='btn btn-outline-secondary' 
                            disabled ={!item.available}
                            onClick= {()=> onAdd({
                                "_id": item._id + color,
                                "image": item.image,
                                "name": item.name,
                                "details": item.details,
                                "price": item.price,
                                "color": color,
                                "available": item.available,
                                "quantity": 1
                            }, 1)}>Add to Cart</button>
                        </div>
                    </div>

                </React.Fragment>
            )):(
                // Return invalid path error
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

