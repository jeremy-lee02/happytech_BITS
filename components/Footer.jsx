import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2022 HappyTech All Rights reserved</p>
      <p className='icons'>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'} target = "_blank">
        <AiFillInstagram />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'} target = "_blank">
        <AiFillFacebook />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'} target = "_blank">
        <AiOutlineTwitter />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'} target = "_blank">
        <AiFillYoutube />
      </Link>
      </p>
    </div>
  )
}

export default Footer