import React from 'react'

const InformationForm = ({type, value, isRequired, text}) => {
  return (
    <>
    <div className='form-floating py-2'>
      <input className='form-control' 
      type={type} 
      placeholder='' 
      ref={value} 
      required = {isRequired} />
      <label className='fs-5 text'>{text}</label>
    </div>
    </>

  )
}

export default InformationForm