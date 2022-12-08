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
      <Link href={'/'}>
        <button type='button' className='cart-icon1'>
            <Image src = {"/../public/logo.png"} objectFit='contain' width={90} height={90} alt={'menu'} />
        </button>
      </Link>
      <Search />
      <div className='cartNav-container'>
        <button type='button' className='cart-icon' onClick= {()=> setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
      </div>
      {showCart?<Cart />:null}
      <div className='menu-nav-container'>
        <button type='button' className='cart-icon' onClick={()=>setShowNav(true)}>
          <Image src = {"/../public/menu.png"} objectFit='contain' width={60} height={60}  alt={'menu'}/>
        </button>
      </div>
      {showNav?<NavItems />:null}
    </div>
    </>
  )
}

export default NavBar