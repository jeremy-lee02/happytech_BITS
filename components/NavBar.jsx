import React, {useEffect} from 'react'
import Link from 'next/link'
import  Image from 'next/image'
import {AiOutlineShopping} from 'react-icons/ai'
import {useStateContext} from '../context/StateContext'
import Cart from './Cart'
import NavItems from './NavItems'
import Search from './Search/Search'


const NavBar = () => {
  const {showCart, setShowCart, showNav, setShowNav, totalQuantities} = useStateContext();
  
  return (
    <>
    <div className='navbar navbar-inverse fixed-top navbar-container'>
      <button type='button' className='cart-icon1' onClick={()=>setShowNav(true)}>
            <Image src = {"/../public/logo.png"} objectFit='contain' width={90} height={90} alt={'menu'} />
      </button>
      <Search />
      <div className='cartNav-container'>
        <button type='button' className='cart-icon' onClick= {()=> setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
      </div>
      {showCart?<Cart />:null}
      {showNav?<NavItems />:null}
    </div>
    </>
  )
}

export default NavBar