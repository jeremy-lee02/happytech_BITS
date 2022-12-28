import React,{useState, useMemo} from 'react'
import {SearchCard} from '../index'
import { useStateContext } from '../../context/StateContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Search = () => {
  const {products} = useStateContext()
  const [query, setQuery] = useState('')
  const router = useRouter()


  const filteredItems = useMemo(() => {
    return products.filter(item=>{
    return item.name.toLowerCase().includes(query.toLowerCase())
  })
  },[products, query])

  useEffect(()=>{
    setQuery('')
  },[router.asPath])

  const disabled = () =>{
    if (router.asPath === '/checkout') {
      return true
    }else{return false}
  }
  return (
    <>
    <div className='position-relative m-auto search-width '>
        <div className='input-group input-group-lg search-control'>
          <input 
            value={query} 
            className="form-control rounded-input" 
            type="text" 
            placeholder="Type Product Name..." 
            disabled= {disabled()}
            onChange={e=> setQuery(e.target.value)}
            aria-label="Search" />
          <div className='input-group-append'>
            <span className='input-group-text bg-white bg-white close-input clear-text' id="inputGroup-sizing-lg">
              <button type='button' className='btn fs-4' onClick={()=>setQuery('')}>X</button>
            </span>
          </div>
          {query === ""? null: (<SearchCard sortedItems={filteredItems} query={query}/>)}
        </div>
    </div>
    </>
  )
}
export default Search

