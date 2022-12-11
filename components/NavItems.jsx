import React, { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import {faHouse, faMouse, faKeyboard, faHeadphones} from "@fortawesome/free-solid-svg-icons";
import {Items} from './index'

const NavItems = () => {
  const {setShowNav} = useStateContext()
  const navRef = useRef()
  const data = [{icon: faHouse, text: "Home"},{icon: faMouse, text: "Mouse"},{icon: faKeyboard, text: "Keyboard"},{icon: faHeadphones, text: "Headphone"}]
  return (
    <div className='nav-wrapper' ref={navRef}>
      <div className='nav-container'>
        <div className='close'>
          <button type='button' className='nav-heading' onClick={()=>setShowNav(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='d-block p-4'>
          <div className="border-bottom border-secondary border-solid border-3">
            <h4>MENU</h4>
          </div>
          <ul className="menu_list list-unstyled">
            {data.map((item, id) => (
              <Items key={id} icon = {item.icon} text = {item.text}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavItems