import React from 'react'
import Link from 'next/link'
import  Image from 'next/image'
import {AiOutlineShopping} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='navbar navbar-inverse fixed-top navbar-container'>
      <button type='button' className='cart-icon'>
      <Image src = {"/../public/menu.png"} objectFit='contain' width={60} height={60} />
      </button>
      <Link href={'/'}>
        <button type='button' className='cart-icon1'>
            <Image src = {"/../public/logo.png"} objectFit='contain' width={90} height={90} />
        </button>
      </Link>
      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>

    </div>
  )
}

export default NavBar