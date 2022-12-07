import React from 'react'

const ResultCheckout = ({textHead, classHead, text, textClass}) => {
  return (
    <>
    <div className='d-flex justify-content-between'>
        <h4 className={`fs-4 ${classHead}`}>{textHead}</h4>
        <p className={`${textClass}`}>{text}</p>
    </div>
    </>
  )
}

export default ResultCheckout