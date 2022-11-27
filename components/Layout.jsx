import React from 'react'
import Head from 'next/head'
import {NavBar, Footer} from './index'
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>HappyTech Store</title>
        <link rel="shortcut icon" sizes='300x300' href="/logo1.png" />
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