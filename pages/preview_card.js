import Headers from '../components/products/Header';
import Main from '../components/products/Main';
import data from '../components/products/database';

function Shopping() {
  const {products} = data;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-9">
          <Headers/>
          <hr/>
            <Main products = {products}/>
          </div>
        </div>
        </div>
  );
}
export default Shopping;
