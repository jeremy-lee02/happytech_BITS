import React from 'react'
import { useStateContext } from '../context/StateContext';
import { Promotion } from '../components';

const checkout = () => {
    const {cartItems} = useStateContext();
    
  return (
    <div className='checkout-wrapper'>
      <div className='checkout'>
        <Promotion text={"Your cart is empty"} isEmpty = {cartItems.length > 0? false: true} />
      </div>
    </div>
  )
}

export default checkout