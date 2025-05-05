import { useState, useEffect } from 'react'
import './Products.css';
import ProductAPI from '../Services/ProductAPI';
import ItemCard from '../Components/ItemCard';


function Products({ query, setQuery }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function searchProduct() {
      if (query.length > 0) {  // Only search if query exists
        const product = await ProductAPI.FetchBySearchQuery(query);
        setProductList(product);
        console.log(product);
      } else {
        const product = await ProductAPI.FetchAllProducts();
        setProductList(product);
      }
    }
    searchProduct();
  }, [query]);

  if (productList.length === 0) {
    return (
      <p>Loading.....</p>
    )
  }

  return (
    <>
      <div >
      
         <div class="container text-center">
           <div class="row" id="section">
             {productList.length === 0 ? (
              <p>No Products Found</p>) :
               ( productList.map((product) => (
                <div class="col" id="productrow">
                  <ItemCard
                       key={product.id}
                       id={product.id}
                       image={product.image}
                       title={product.title}
                       price={product.price}
                   />
             </div>
                  ))
               )}
            </div>
          </div>

      </div>
    </>
  )
}

export default Products;
