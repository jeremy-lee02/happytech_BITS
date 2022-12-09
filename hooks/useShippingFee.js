import {useState, useEffect} from 'react'
import { useStateContext } from '../context/StateContext'


export default function useShippingFee() {
    const [shippingFee, setShippingFee] = useState(0)
    const {cityName, provinceCode} = useStateContext()

    useEffect(()=>{
        if (provinceCode !== 79 && provinceCode !== 1) {
            setShippingFee(15)
            
        }else{
            setShippingFee(10)
        }
    },[cityName])


    return {shippingFee}
}