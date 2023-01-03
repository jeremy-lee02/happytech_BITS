import React, { useEffect } from 'react'
import { useStateContext } from '../context/StateContext';
import { Promotion } from '../components';

const Checkout = () => {
    const {cartItems} = useStateContext();
    useEffect(()=>{
      console.log(cartItems) 
    },[])
    
  return (
    <div className='checkout-wrapper'>
      <div className='checkout'>
        <Promotion text={"Your cart is empty"} isEmpty = {cartItems.length > 0? false: true} />
      </div>
    </div>
  )
}
export default Checkout
