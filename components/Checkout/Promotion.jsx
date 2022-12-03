import React, {useState} from 'react'
import Link from 'next/link'
import {Form} from 'react-bootstrap'

const Promotion = ({text, isEmpty}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')



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
        <div className='promo-box px-5 border border-2'>
          <div className='input-group input-group-lg mb-2 '>
            <input placeholder='Enter your promotion' className='form-control' />
          </div>
          <button className='btn btn-secondary mt-2 px-4 fs-4 text'>Check</button>
        </div>
        {/* TODO:  */}
        <div className='info-container px-5 border border-2 rounded-3'>
          <form className='col g-1 needs-validation'>
            <div className='form-floating py-2'>
              <input className='form-control' 
              required
              type="text" 
              placeholder='Enter your full name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} />
              <label className='fs-5 text'>Full Name</label>
            </div>

            <div className='form-floating  py-2'>
              <input className='form-control' 
              type="email" 
              placeholder='Enter your email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required />
              <label className='fs-5 text'>Email</label>
            </div>

            <div className='form-floating py-2'>
              <input className='form-control' 
              type="number" 
              placeholder='Enter your phone number' 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required />
              <label className='fs-5 text'>Phone</label>
            </div>

            <div className='form-floating py-2'>
              <input className='form-control' 
              type="text" 
              placeholder='Enter your address' 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required />
              <label className='fs-5 text'>Address</label>
            </div>
          </form>
        </div>
        {/* <Link href= './'>
          <button className='btn btn-primary mt-4'>Continue Shopping</button>
        </Link> */}
        </>
      )}

    </div>
  )
}

export default Promotion