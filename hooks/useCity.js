import {useState, useEffect} from 'react'
import { useStateContext } from '../context/StateContext'

export default function useCity(){
    const [city, setCity] = useState([])
    
    const {cityName, setCityName, provinceCode, setProvinceCode} = useStateContext()

    useEffect(()=>{
        fetch('https://provinces.open-api.vn/api/')
            .then(res => res.json())
            .then(data => setCity(data))
    }, [])

    const cityOption = city.map(item=>{
        const splitName = item.name.split(" ")
        if (splitName[0] === "Thành") {
            splitName.shift()
            splitName.shift()
        }else{
            splitName.shift()
        }
        let newCityName = ""
        splitName.forEach(element => {
            newCityName = newCityName + element + " "
        });
        
        return {value:item.code, label: newCityName}
    } )
    

    const onChangeCity = (e) =>{
        const value = city.filter(item =>item.code === e.value)
        setCityName(value[0].name)
        setProvinceCode(e.value)
    }


    return {cityName, cityOption, onChangeCity ,provinceCode}
}