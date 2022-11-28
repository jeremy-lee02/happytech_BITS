import React, { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';

const NavItems = () => {
  const {setShowNav} = useStateContext()
  const navRef = useRef()
  return (
    <div className='nav-wrapper' ref={navRef}>
      <div className='nav-container'>
        <div className='close'>
          <button type='button' className='nav-heading' onClick={()=>setShowNav(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='d-block p-4'>
          <p>Home</p>
          <p>Mouse</p>
          <p>Keyboard</p>
          <p>Headphone  </p>
        </div>
      </div>
    </div>
  )
}

export default NavItems