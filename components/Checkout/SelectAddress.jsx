import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import useCity from '../../hooks/useCity'
import useDistrict from '../../hooks/useDistrict'

const SelectAddress = () => {
    const {cityOption, onChangeCity, provinceCode} = useCity()
    const {districtOption, onChangeDistrict} = useDistrict(provinceCode)
    

  return (
    <div className='py-3 row'>
        <Select className='fs-5 col' placeholder="Select City" options={cityOption} onChange={onChangeCity} required />
        <Select className='fs-5 col' placeholder="Select District" options={districtOption} onChange= {onChangeDistrict} required  />
    </div>
  )
}

export default SelectAddress