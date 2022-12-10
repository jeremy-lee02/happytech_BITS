import React,{ useEffect, useMemo} from 'react'
import Card from '../../components/products/Card';
import { client} from '../../lib/client'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext';


function Shopping({products}) {
  const router = useRouter()
  const {setProducts} = useStateContext()

  const category = router.asPath.split('/')
  useEffect(()=>{
    setProducts(products)
  },[router.asPath])
  const newProducts = useMemo(()=>{
    return products.filter(item => item.type.toLowerCase() === category[2])
  }, [router.asPath])

  return (
    <div className="container category-wrapper">
      <div className='d-flex justify-content-center mb-4'>
        <h2>{category[2].charAt(0).toUpperCase() + category[2].slice(1)}</h2>
      </div>
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
  console.log(products)

  return {
    props: {products}
  }

}
