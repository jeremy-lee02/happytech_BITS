import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.css';
import Filter from "./Filter";
// import RenderFilter from "./RenderFilter";

export default function Main(props) {
    const  {products} = props;
    return <div className="row justify-content-center"> 
            <h2 className="d-flex justify-content-center">Our Products</h2>
                <Filter/>
                <div className="col-md-9">
                    <div className="row">
                        {products.map((product) => (<Product key = {product.id} product={product}></Product>))}
                    </div>
            </div>
        </div>;
    
}

