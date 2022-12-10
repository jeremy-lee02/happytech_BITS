import Card from '../../components/products/Card';
import { client,urlFor } from '../../lib/client'


function Shopping({products}) {

  return (
    <div className="container category-wrapper">
      <div className='row gap-5 justify-content-center'>
        <Card products={products} />
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
