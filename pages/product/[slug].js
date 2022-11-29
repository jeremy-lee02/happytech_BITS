import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar,} from 'react-icons/ai'
import { BestProducts } from '../../components'
import { useStateContext } from '../../context/StateContext'



const ProductDetails = ({product, products, recProducts}) => {
  const {image, name, details, price, color, available} = product
  const {quantity, increase, decrease, onAdd} = useStateContext()
  const [selectedColor, setSelectedColor] = useState(color[0])
  
//   const SELECTED_PRODUCT = {
//     "image": image,
//     "name": name,
//     "details": details,
//     "price": price,
//     "color": selectedColor,
//     "available": available
// }

  const [index, setIndex] = useState(0)
  const check = (value) =>{
    if(value) return "Available"
    return "Out of stock"
  }

  return (
    <div className='home'>
        <div className='product-detail-container'>
            <div>
                <div className=''>
                    <img src= {urlFor(image && image[index])} className= 'product-detail-image' />
                </div>
                <div className='small-images-container'>
                    {image?.map((item,i)=>(
                        <img src= {urlFor(item)} 
                        className= {i === index? 'small-image selected-image': 'small-image'} 
                        onMouseEnter= {()=>setIndex(i)}
                        key = {i} />
                    ))}
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <h4>Details:</h4>
                <p>{details}</p>
                <div>
                  <h4>Choose your color:</h4>
                  <select className='form-select' aria-label='Choose color' value={selectedColor} onChange={(e)=> {setSelectedColor(e.target.value)}}>
                    {color?.map((item,id)=>(
                      <option selected key={id} value = {item}>{item}</option>
                    ))}
                  </select>
                </div>
                <p className='price'>${price}</p>
                <h3 className='available'>{check(available)}</h3>
                <div className='quantity'>
                    <h3>Quantity:</h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick= {decrease}>
                            <AiOutlineMinus />
                        </span>
                        <span className='num'>
                            {quantity}
                        </span>
                        <span className='plus' onClick= {increase}>
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick= {()=> onAdd(product, quantity)} disabled = {check(available)==="Out of stock"?true:false}>Add To Cart</button>
                    <button type='button' className='buy-now' onClick= '' disabled = {check(available)==="Out of stock"?true:false}>Buy Now</button>
                </div>
            </div>
        </div>
        <div className='maylike-products-wrapper'>
            <h2>You May Also Like</h2>   
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {recProducts.map((item)=>(
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
  const recProducts = []  
  const query = `*[_type == "products" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "products"]'
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  products.forEach(element => {
    if (product.type === element.type && product.name !== element.name) {
        recProducts.push(element);
    }
  });

  return {
    props: {products, product, recProducts}
  }
}

export default ProductDetails