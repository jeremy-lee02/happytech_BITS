import React,{useState, useEffect} from 'react'

const MethodDes = ({method}) => {
    const [text, setText] = useState('')
    useEffect(() =>{
        switch (method) {
            case "cod":
                setText('Transaction will be paid when the goods delivered to your address. Only accept cash for this method!')
                break;
            case "banking":
                setText('We will send you banking details via phone number. After finished transaction, you will receive a confirmation via Phone Number or Email to confirm your payment ')
                break;
        
            case "":
                setText("Please select payment method.")
                break;
        }
    },[method])

  return (
    <div className='card p-4 shipping-method-card mt-2'>
        {text}
    </div>
  )
}

export default MethodDes