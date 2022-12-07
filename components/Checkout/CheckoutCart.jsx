import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../lib/client';

const CheckoutCart = ({cartItems}) => {
  return (
    <>
        {cartItems.map((item)=>(
            <div className='row gap-5 pb-3' key={item._id}>
                <div className='rounded col-1'>
                    <img src={urlFor(item.image[0])} width={75} height={75} className="rounded" alt= {item.name} />
                </div>
                <div className='mt-2 checkout-font col'>
                    <p>{item.name} {item.color}
                        <span className='checkout-quantity'> x{item.quantity}</span>
                    </p> 
                </div>
                <div className='mt-2 checkout-font col'>
                    <p className='px-4 px-md-5'>{item.price}$</p>
                </div>
            </div>
        ))}    
    </>

  )
}

export default CheckoutCart