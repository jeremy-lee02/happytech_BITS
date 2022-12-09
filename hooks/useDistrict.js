import {useState, useEffect} from 'react'
import { useStateContext } from '../context/StateContext'

const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

export default function useDistrict(provinceCode){
    const [district, setDistrict] = useState([])
    const {setDistrictName, districtName} = useStateContext()
    useEffect(()  =>{
        fetch(`https://provinces.open-api.vn/api/d/`)
        .then(res => res.json())
        .then(data => setDistrict(()=>data.filter(item => item.province_code === provinceCode)))
        // console.log(provinceCode)
    }, [provinceCode])

    
    const newDistrictName = district.map(item => item.name)
    const editName = newDistrictName.map(item => {
        const splitName = item.split(" ")
        if (splitName[0] !== "Thành" 
        && splitName[1] !== "1"
        && splitName[1] !== "2"
        && splitName[1] !== "3"
        && splitName[1] !== "4"
        && splitName[1] !== "5"
        && splitName[1] !== "6"
        && splitName[1] !== "7"
        && splitName[1] !== "8"
        && splitName[1] !== "9"
        && splitName[1] !== "10"
        && splitName[1] !== "11"
        && splitName[1] !== "12" ) {
            splitName.shift()
        }
        let district = ""
        splitName.forEach(element => {
            district = district + element + " "
        });
        return district
    })
    if(editName[0] === ''){
        editName.shift()
    }
    const districtOption = editName.map(item=> ({value:item, label: item}))

    const onChangeDistrict = (e) => {
        setDistrictName(e.value)
    }

    return {districtOption, districtName, onChangeDistrict}
}