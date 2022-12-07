import React from 'react'
import { SearchItem } from '../index'

const SearchCard = ({sortedItems, query}) => {
  return (
    <div className='card card-container'>
      <SearchItem sortedItems={sortedItems} query={query} />
    </div>
  )
}

export default SearchCard