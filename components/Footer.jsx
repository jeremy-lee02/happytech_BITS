import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2022 HappyTech All Rights reserved</p>
      <p className='icons'>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'}>
        <AiFillInstagram />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'}>
        <AiFillFacebook />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'}>
        <AiOutlineTwitter />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006438044375'}>
        <AiFillYoutube />
      </Link>
      </p>
    </div>
  )
}

export default Footer