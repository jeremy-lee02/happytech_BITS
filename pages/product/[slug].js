import React from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar,} from 'react-icons/ai'
import { BestProducts } from '../../components'

const ProductDetails = ({product, products}) => {
  const {image, name, details, price, color} = product
  return (
    <div className='home'>
        <div className='product-detail-container'>
            <div>
                <div className=''>
                    <img src= {urlFor(image && image[0])} className= 'product-detail-image' />
                </div>
                {/* <div className='small-images-container'>
                    {image?.map((item,i)=>(
                        <img src= {urlFor(item)} 
                        className= {i === index? 'small-image selected-image': 'small-image'} 
                        onMouseEnter= {()=>setIndex(i)}
                        key = {i} />
                    ))}
                </div> */}
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <h4>Details:</h4>
                <p>{details}</p>
                <div>
                  <h4>Choose your color:</h4>
                  <select className='form-select' aria-label='Choose color'>
                    {color?.map((item,id)=>(
                      <option selected>{item}</option>
                    ))}
                  </select>
                </div>
                <p className='price'>${price}</p>
                <div className='quantity'>
                    <h3>Quantity:</h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick= ''>
                            <AiOutlineMinus />
                        </span>
                        <span className='num'>
                            30
                        </span>
                        <span className='plus' onClick= ''>
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick= ''>Add To Cart</button>
                    <button type='button' className='buy-now' onClick= ''>Buy Now</button>
                </div>
            </div>
        </div>
        <div className='maylike-products-wrapper'>
            <h2>You May Also Like</h2>   
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {products.map((item)=>(
                        <BestProducts key={item._id} products={item} />
                    ))}
                </div>    
            </div>  
        </div>
    </div>
  )
}
export const getStaticPaths = async () =>{
  const query = `*[_type == "products"]{
      slug {
          current
      }
  }`

  const products = await client.fetch(query)
  const paths = products.map((product)=> ({
      params:{
          slug: product.slug.current
      }
  }))
  return {
      paths,
      fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: { slug }}) => {
  const query = `*[_type == "products" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "products"]'
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product)
  // console.log(products)
  return {
    props: {products, product}
  }
}

export default ProductDetails