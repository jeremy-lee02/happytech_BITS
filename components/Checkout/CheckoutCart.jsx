import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../lib/client';

const CheckoutCart = ({cartItems}) => {
  return (
    <>
        {cartItems.map((item)=>(
            <div className='d-flex gap-3 pt-3' key={item._id}>
                <div className='rounded'>
                    <img src={urlFor(item.image[0])} width={75} height={75} className="rounded" />
                </div>
                <div className='mt-2 checkout-font'>
                    <p >{item.name}
                        <span className='checkout-quantity'> x{item.quantity}</span>
                     </p>
                    
                </div>
                <div className='mt-2 checkout-font'>
                    <p className='checkout-price'>{item.price}$</p>
                </div>
            </div>
        ))}    
    </>

  )
}

export default CheckoutCart