import 'bootstrap/dist/css/bootstrap.css';


export default function Product(props) {
    const { product } = props;
    return(
        <div className="container col-md-4"> {/* de 4 containder de col-3*/}
              <div className="mb-3 text-center">
                  <div className="card" >
                      <div className="img-container">
                          <a >  {/* href={`#${product.id}`}*/}
                            <img src={product.image} alt={product.name} className="image .d-flex justify-con tent-center img-thumbnail"/>
                                <p>{product.name}</p>
                            </a>
                          <div className="overlay">
                              <button className="btn btn-outline-secondary btn-sm d-flex justify-content-center"><i className="image fas fa-cart-plus mr-2"></i>
                                  Add to Cart
                              </button>
                              <button className="btn btn-outline-secondary btn-sm"><i className="far fa-heart"></i></button>
                          </div>
                      </div>
                      <div className="card-body">
                          <b>{(product.price)}</b>
                          <h5 className="card-title">Description</h5>
                      </div>
                  </div>
              </div>
          </div>
    )
}

