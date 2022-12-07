import Link from 'next/link';
import React,{useState} from 'react'

import { urlFor } from '../../lib/client';

const SearchItem = ({sortedItems, query}) => {

  return (
    <div className='card w-100 border-0 '>
        <ul className="list-group list-group-flush text-dark ">
            {sortedItems.length < 1? (
                <li className="list-group-item text-dark">No items with
                    <span className='text-danger'> {query}</span>
                </li>
            ):(
                <>
                {sortedItems.map(item=>(
                <li className="list-group-item text-dark on-hover " key={item._id}>
                    <Link href={`/product/${item.slug.current}`}>
                        <div className='d-flex gap-3'>
                            <div>
                                <img src={urlFor(item.image[0])} width={75} height = {75} alt = {item.name}/>
                            </div>
                            <div className='fs-5 pt-2'>{item.name}</div>
                            <div className='fs-5 pt-2 text-danger'>{item.price}</div>
                        </div>
                    </Link>
                </li>
            ))}
                </>
            )}
        </ul>
    </div>
  )
}

export default SearchItem