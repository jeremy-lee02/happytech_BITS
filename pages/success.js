import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import {runFireWorks} from '../lib/utils'


const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()
    useEffect(()=>{
        sessionStorage.clear();
        setCartItems([]);
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireWorks()
    }, [])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for shopping!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>For more information, please contact to this FaceBook
                <a className='email' target="_blank" href='https://www.facebook.com/profile.php?id=100006438044375'>Link</a>
            </p>
            <Link href= '/'>
                <button type='button' className='btn btn-primary' width = "300px">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success