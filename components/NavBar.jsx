import React from 'react'
import Link from 'next/link'
import  Image from 'next/image'
import {AiOutlineShopping} from 'react-icons/ai'
import {useStateContext} from '../context/StateContext'
import Cart from './Cart'
import NavItems from './NavItems'

const NavBar = () => {
  const {showCart, setShowCart, showNav, setShowNav} = useStateContext();
  return (
    <div className='navbar navbar-inverse fixed-top navbar-container'>
      <button type='button' className='cart-icon' onClick={()=>setShowNav(true)}>
        <Image src = {"/../public/menu.png"} objectFit='contain' width={60} height={60} />
      </button>
        {showNav?<NavItems />:null}
      <Link href={'/'}>
        <button type='button' className='cart-icon1'>
            <Image src = {"/../public/logo.png"} objectFit='contain' width={90} height={90} />
        </button>
      </Link>
      <button type='button' className='cart-icon' onClick= {()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
      {showCart?<Cart />:null}

    </div>
  )
}

export default NavBar