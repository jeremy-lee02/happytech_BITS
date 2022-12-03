import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'


const Context = createContext();

export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    let foundItem;
    let index
    let selectedColor

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find(item => item._id === product._id)
        setTotalPrice(prev => prev + product.price * quantity)
        setTotalQuantities(prev => prev + quantity)
        toast.success(`${quantity} ${product.name} added to the cart`)
        if(checkProductInCart){
            const updateCartItems = cartItems.map(cartProduct => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct, quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updateCartItems)
        }else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
        console.log(product)
    }
    const removeItem = (product) =>{
        foundItem = cartItems.find(item => item._id === product._id)
        const newCartItems = cartItems.filter((item)=> item._id !== product._id )
        setTotalPrice(prev => prev - foundItem.price * foundItem.quantity)
        setTotalQuantities(prev => prev - foundItem.quantity)
        setCartItems(newCartItems)
    }
    const toggleCartItem = (id, value) => {
        foundItem = cartItems.find(item => item._id === id )
        index = cartItems.findIndex(item => item._id === id)
        const newCartItems = cartItems.filter((item)=> item._id !== id)
        if (value === 'increment') {
            setCartItems([{ ...foundItem, quantity: foundItem.quantity + 1} , ...newCartItems ])
            setTotalPrice((prev)=> prev + foundItem.price)
            setTotalQuantities(prev => prev + 1)
        }else if (value === 'decrement'){
            if (foundItem.quantity > 1) {
                setCartItems([{ ...foundItem, quantity: foundItem.quantity - 1}, ...newCartItems])
                setTotalPrice((prev)=> prev - foundItem.price)
                setTotalQuantities(prev => prev - 1)
            }
        }
    }

    const increase = () =>{
        setQuantity(prev=> prev+1)
    }
    const decrease = () =>{
        setQuantity(prev =>{
            if(prev - 1 < 1 ) return 1
            return prev - 1
        })
    }

    return (
    <Context.Provider value={{
        showCart, setShowCart,
        showNav, setShowNav, 
        quantity, increase, decrease, onAdd,
        totalQuantities, removeItem,cartItems,totalPrice,
        setTotalQuantities, setCartItems, toggleCartItem

    }}>
        {children}
    </Context.Provider>)
}

export const useStateContext = () => useContext(Context)