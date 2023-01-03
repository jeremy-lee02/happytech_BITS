import React, {useState, useRef} from 'react'
import Select from 'react-select'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {CheckoutCart,InformationForm,ResultCheckout, MethodDes, SelectAddress} from '../index'
import {useStateContext} from '../../context/StateContext'
import useShippingFee from '../../hooks/useShippingFee'
import {toast} from 'react-hot-toast'
import { AiOutlineDeliveredProcedure, AiOutlineBank } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';

const PROMOTION = "WORLDCUP10"
const promo = 10;


const Promotion = ({text, isEmpty}) => {
  //UseRouter
  const router = useRouter()
  // UseRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()
  const noteRef = useRef()
  const promoRef = useRef()
  //--------------------------------------------------
  //UseState()
  const [checkPromo, setCheckPromo] = useState(false);
  const [isError, setIsError] = useState(true)
  const [method, setMethod] = useState('')
  
  // Custom Hooks
  const {cartItems, totalPrice, provinceCode} = useStateContext()
  const {shippingFee} = useShippingFee()
  //Option
  const options = [
    { value: "cod", label: <><AiOutlineDeliveredProcedure /> Cash on delivery</> },
    { value: "banking", label: <><AiOutlineBank /> Internet Banking</> }
];

const handleMethodChange = selected => {
  setMethod(selected.value)
}


  //Check Promo
  const handlePromo = () => {
    if (promoRef.current.value !== PROMOTION) {
      setIsError(false)
      setCheckPromo(false)
      toast.error(`There is no ${promoRef.current.value} promotion`)
    }else{
      toast.success(`You have added your promotion ${PROMOTION}`)
      setCheckPromo(true)
      setIsError(true)
    }
  }

  //Calculate final price
  const finalPrice = () => {
    let FINAL_PRICE_WITH_OUT_TAX = 0
    let FINAL_PRICE = 0
    if(checkPromo){
      FINAL_PRICE_WITH_OUT_TAX = totalPrice + shippingFee - promo
    }else{
      FINAL_PRICE_WITH_OUT_TAX = totalPrice + shippingFee
    }
    FINAL_PRICE = FINAL_PRICE_WITH_OUT_TAX + (FINAL_PRICE_WITH_OUT_TAX * 0.08)
    return FINAL_PRICE
  }

  //Handle Submit
  const handleSubmit = async e =>{
    e.preventDefault()
    if(method !== ''){
      const buyers = {
        order_id: uuidv4(),
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
        note: noteRef.current.value,
        shipping: method,
        price: finalPrice().toFixed(2),
        cart: cartItems
      }
      try{
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(buyers),
        })
        if (res.ok) {
          toast.success("Check your email for confirmation")
          router.push('/success')
        }
      }catch (err){
        alert(err)
      }
    }else toast.error("Please select shipping method")
  }


  return (
    <div className='container'>
      <div className='header-checkout'>
        <h2>Checkout</h2>
      </div>
      {isEmpty? (
        <>
        <div className='promo-box'>
          <p>{text}</p>
        </div>
        <Link href= './'>
          <button className='btn btn-secondary mt-4 fs-5 text'>Continue Shopping</button>
        </Link>
        </>
      ) : (
        <>
        <div className='row gap-3'>
          {/* Left section */}
          <div className='info-container px-5 border border-2 col-12 col-xxl-6'>
            <form className='needs-validation' onSubmit={handleSubmit}>
              <h3>Shipping Information</h3>
              <div className='py-3'>
                <InformationForm text={"Full Name"} type={"text"} value = {nameRef} isRequired={true} />
                <InformationForm text={"Email"} type={"email"} value = {emailRef} isRequired={true} />
                <InformationForm text={"Phone Number"} type={"number"} value = {phoneRef} isRequired={true} />
                <InformationForm text = {"Address"} type={"text"} value = {addressRef} isRequired={true} />
                <SelectAddress />
                <InformationForm text = {"Note"} type={"text"} value = {noteRef} isRequired={false} />
              </div>
              <h3>Shipping Method</h3>
              <div className='py-3'>
                <Select className='fs-5' placeholder='Select Shipping Method' onChange = {handleMethodChange} options={options}/>
                <MethodDes method={method}  />
              </div>
              <div>
                <button type='submit' className='btn btn-secondary mt-2 px-2'>Check out</button>
              </div>
            </form>
          </div>
          {/* Right section */}
          <div className='promo-box border border-2 col'>
            <div className='checkout-cart-container p-3'>
              <CheckoutCart cartItems={cartItems} />
            </div>
            <hr />
            <div className='row'>
              <div className='form-floating col-lg-9 mt-2'>
                  <input className= {`form-control ${isError? '': 'form-alert'}`}
                    type="text" 
                    placeholder='' 
                    ref={promoRef} />
                  <label className='fs-5 text mx-3'>Promotion</label>
              </div>
              <div className='col py-2'>
                <button className='btn btn-secondary mt-2 px-4 py-2 fs-5 text' onClick={handlePromo}>Apply</button>
              </div>
              {!isError?(
              <p className='fs-5 text-danger pl-2 pt-2'>* This promotion is not exist</p>) : null}
            </div>
            {/* Total */}
            <hr />
            <ResultCheckout textHead={"Total Product Price:"} classHead= {'text-secondary'} text={`${totalPrice.toFixed(2)}$`} />
            <ResultCheckout textHead={"Shipping Fee:"} classHead= {'text-secondary'} text={`${provinceCode ===''? '0':shippingFee}.00$`} />
            <ResultCheckout textHead={"Tax:"} classHead= {'text-secondary'} text={`8%`} />
            {checkPromo? (
              <ResultCheckout textHead={"Promotion:"} classHead= {'text-secondary'} text={`-${promo}.00$`} textClass={'text-danger'} />
            ):null}
            <hr />
            <ResultCheckout textHead={"Total Payment:"} text={`${finalPrice().toFixed(2)}$`} />
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Promotion