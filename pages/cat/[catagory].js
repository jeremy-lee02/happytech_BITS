import React,{ useEffect, useMemo, useState} from 'react'
import {Card, Filter} from '../../components'
import { client} from '../../lib/client'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext';


function Shopping({products}) {
  const router = useRouter()
  const {setProducts} = useStateContext()
  const [filterValue, setFilterValue] = useState('A-Z')

  const category = router.asPath.split('/')
  // Set products to use the search bar
  useEffect(()=>{
    setProducts(products)
  },[router.asPath])
  // Filter all products with the category from the route
  // Default will be filtered by A-Z Alphabetic
  // Filter base on filterValue (A-Z, Z-A, Highest Price, Lowest Price, and Best Selling Products)
  const newProducts = useMemo(()=>{
    const product_cat =  products.filter(item => item.category.toLowerCase() === category[2])
    switch (filterValue) {
      case 'A-Z':
        return product_cat.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        break;
      case 'Z-A':
        return product_cat.sort((a,b)=> b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
        break;
      case 'Lowest Price':
        return product_cat.sort((a,b)=> a.price - b.price)
        break;
      case 'Highest Price':
        return product_cat.sort((a,b)=> b.price - a.price)
        break;
      case 'Best Selling Items':
        return product_cat.sort((a,b)=> b.sales - a.sales)
        break;
      default:
        break;
    }
  }, [router.asPath, filterValue])

  return (
    <div className="container-fluid category-wrapper">
      <Filter filterValue={filterValue} onChange= {e => setFilterValue(e.target.value)} />
      <div className='row gap-5 justify-content-center'>
        <Card products={newProducts} />
      </div>
    </div>
  );
}
export default Shopping;

export const getServerSideProps = async () =>{
  const query = '*[_type == "products"]'
  const products = await client.fetch(query)

  return {
    props: {products}
  }

}
