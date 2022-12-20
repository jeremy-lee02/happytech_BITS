import React from 'react'

const Filter = ({filterValue, onChange}) => {
  return (
    <div className='filter-container'>
        <p className='filter-text text-secondary'>{filterValue}</p>
        <div className='filter-content'>
        <select value={filterValue} className="form-select" onChange={onChange}>
            <option value='A-Z'>A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Highest Price">Highest Price</option>
            <option value="Best Selling Items">Best Selling Items</option>
        </select>
        </div>
  </div>
  )
}

export default Filter