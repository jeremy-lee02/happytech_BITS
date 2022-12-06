import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { useEffect } from 'react';


const Cart = () => {
  const cartRef = useRef()
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItem, removeItem} = useStateContext()
  // const localCart = JSON.parse(localStorage.getItem('cart'))

  // useEffect(()=>{
  //   console.log(localCart)
  // }, [])


  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={()=>setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>{totalQuantities} items</span>
        </button>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} /> 
            <h3>Your Shopping Bag is empty</h3>
            <Link href={'/'}>
              <button type='button' onClick = {()=> setShowCart(false)} className= 'btn'>Continue Shoppping</button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >=1 && cartItems.map((item)=> (
            <div className='product' key={item._id}>
              <img src= {urlFor(item?.image[0])} className = 'cart-product-image'/>
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex top'>
                  <h5>Color:</h5>
                  <h4>{item.color}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                    <span className='minus' onClick= {()=>toggleCartItem(item._id, 'decrement')}>
                      <AiOutlineMinus />
                    </span>
                    <span className='num'>
                      {item.quantity}
                    </span>
                    <span className='plus' onClick= {()=>toggleCartItem(item._id, 'increment')}>
                      <AiOutlinePlus />
                    </span>
                    </p>
                  </div>
                  <button type='button' className='remove-item' onClick= {()=> removeItem(item)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Total:</h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
            <div className='btn-container'>
              <Link href= '/checkout'>
                <button type='button' className='btn btn-primary mt-3'>Check Out</button>
              </Link>
            </div>
            {/* <div className='btn-container'>
              <button type='button' className='btn btn-primary mt-3'onClick={()=>console.log()}>Test</button>
            </div> */}
          </div>
          
        )}
      </div>
    </div>
  )
}

export default Cart