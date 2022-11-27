import React from 'react'
import Head from 'next/head'
import {NavBar, Footer} from './index'
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>HappyTech Store</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout