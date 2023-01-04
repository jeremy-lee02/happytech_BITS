import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children}) =>{
    const initialState = [];
    const [showCart, setShowCart] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState(initialState)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const [cityName, setCityName] = useState('')
    const [provinceCode, setProvinceCode] = useState('')
    const [districtName, setDistrictName] = useState('')
    let foundItem;
    let index;

    //Set up session storage
    useEffect(()=>{
        const cartData = JSON.parse(sessionStorage.getItem("cart"))
        const totalQuantities1 = JSON.parse(sessionStorage.getItem("totalQuantities"))
        const totalPrice1 = JSON.parse(sessionStorage.getItem("totalPrice")) 
          if (cartData) {
              setCartItems(cartData)
              setTotalPrice(totalPrice1)
              setTotalQuantities(totalQuantities1)
          }else{
            setCartItems([])
          }
      },[])
    
    useEffect(() => {
        if (cartItems !== []){
          sessionStorage.setItem("cart", JSON.stringify(cartItems))
          sessionStorage.setItem("totalQuantities", totalQuantities)
          sessionStorage.setItem("totalPrice", totalPrice)
          sessionStorage.setItem("checkout", true)
        }
    }, [cartItems])
    
    // Add item to cart 
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find(item => item._id === product._id)
        setTotalPrice(prev => prev + product.price * quantity)
        setTotalQuantities(prev => prev + quantity)
        toast.success(`${quantity} ${product.name} added to the cart`)
        if(checkProductInCart) {
            const updatedCartItem = cartItems.map((cartProduct) => {
              if(cartProduct._id === product._id) {
                cartProduct.quantity = cartProduct.quantity + quantity;
              }
              return cartProduct
            })
            setCartItems(updatedCartItem)

        }else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
    }
    // Remove Item from cart
    const removeItem = (product) =>{
        foundItem = cartItems.find(item => item._id === product._id)
        const newCartItems = cartItems.filter((item)=> item._id !== product._id )
        setTotalPrice(prev => prev - foundItem.price * foundItem.quantity)
        setTotalQuantities(prev => prev - foundItem.quantity)
        setCartItems(newCartItems)
    }
    // Update Item from cart
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
    //Increase quantity of item
    const increase = () =>{
        setQuantity(prev=> prev+1)
    }
    //Decrease quantity of item
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
        quantity, increase, decrease, onAdd, setTotalPrice,
        totalQuantities, removeItem,cartItems,totalPrice,
        setTotalQuantities, setCartItems, toggleCartItem,
        products, setProducts, setCityName, setDistrictName,
        cityName, districtName, provinceCode, setProvinceCode

    }}>
        {children}
    </Context.Provider>)
}

export const useStateContext = () => useContext(Context)