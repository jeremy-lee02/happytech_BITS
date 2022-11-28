import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import {Layout} from '../components/index'
import { StateContext } from '../context/StateContext';
import {Toaster} from 'react-hot-toast'




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])

  
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
