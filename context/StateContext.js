import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'


const Context = createContext();

export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false)
    const [showNav, setShowNav] = useState(false)

    return (
    <Context.Provider value={{
        showCart, setShowCart,
        showNav, setShowNav
    }}>
        {children}
    </Context.Provider>)
}

export const useStateContext = () => useContext(Context)