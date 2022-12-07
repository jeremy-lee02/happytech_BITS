import React, {useState, useRef} from 'react'
import Select from 'react-select'
import Link from 'next/link'
import {Form, FormSelect} from 'react-bootstrap'
import {CheckoutCart,InformationForm,ResultCheckout} from '../index'
import {useStateContext} from '../../context/StateContext'
import {toast} from 'react-hot-toast'
import { AiOutlineDeliveredProcedure, AiOutlineBank } from 'react-icons/ai'

const PROMOTION = "WORLDCUP10"
const promo = 10;
const shipping_fee = 5

const Promotion = ({text, isEmpty}) => {
  // UseRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()
  const noteRef = useRef()
  const promoRef = useRef()
  const shippingRef = useRef()
  //--------------------------------------------------
  //UseState()
  const [checkPromo, setCheckPromo] = useState(false);
  const [isError, setIsError] = useState(true)
  // Custom Hooks
  const {cartItems, totalPrice} = useStateContext()
  //Option
  const options = [
    { value: "cod", label: <><AiOutlineDeliveredProcedure /> Cash on delivery</> },
    { value: "banking", label: <><AiOutlineBank /> Internet Banking</> }
];


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
      FINAL_PRICE_WITH_OUT_TAX = totalPrice + shipping_fee - promo
    }else{
      FINAL_PRICE_WITH_OUT_TAX = totalPrice + shipping_fee
    }
    FINAL_PRICE = FINAL_PRICE_WITH_OUT_TAX + (FINAL_PRICE_WITH_OUT_TAX * 0.08)
    return FINAL_PRICE
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
            <Form className='needs-validation '>
              <h3>Shipping Information</h3>
              <div className='py-3'>
                <InformationForm text={"Full Name"} type={"text"} value = {nameRef} isRequired={true} />
                <InformationForm text={"Email"} type={"email"} value = {emailRef} isRequired={true} />
                <InformationForm text={"Phone Number"} type={"number"} value = {phoneRef} isRequired={true} />
                <InformationForm text = {"Address"} type={"text"} value = {addressRef} isRequired={true} />
                <InformationForm text = {"Note"} type={"text"} value = {noteRef} isRequired={false} />
              </div>
              <h3>Shipping Method</h3>
              <div className='py-3'>
                <Select className='fs-5' placeholder='Select Shipping Method' options={options} ref={shippingRef} />
                <div className='card p-4 shipping-method-card mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id consequuntur tempore doloribus saepe. Commodi quo optio, quae tempore ullam cumque? Necessitatibus eius sint blanditiis in, corporis aut vel laborum?</div>
              </div>
              <div>
                <button type='button' className='btn btn-secondary mt-2 px-2'>Check out</button>
              </div>
            </Form>
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
            <ResultCheckout textHead={"Shipping Fee:"} classHead= {'text-secondary'} text={`${shipping_fee}.00$`} />
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