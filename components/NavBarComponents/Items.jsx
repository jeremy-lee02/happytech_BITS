import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';

const Items = ({icon,text}) => {
    const {setShowNav} = useStateContext()
  return (
    <>
    <Link href={"/"}>
        <li onClick={() => setShowNav(false)} className="menu_item my-5">
            <FontAwesomeIcon className="icon fa-fw fs-4" icon={icon}/>
            <span className="menu_text m-2 fs-4 px-2">{text}</span>
        </li>
    </Link>
  </>
  )
}

export default Items