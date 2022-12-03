import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import {Layout} from '../components/index'
import { StateContext } from '../context/StateContext';
import {Toaster} from 'react-hot-toast'
import { Beforeunload } from 'react-beforeunload';

const removeApplicationData = () => {
    if (window) { // NextJS is ServerSideRendering, therefore the window-check.
        localStorage.clear();
    }
};


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
