import React, { useState,useEffect, useContext } from 'react'
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import ProductAPI from '../Services/ProductAPI';
import { MyContext } from '../Context/CartContext';
import './ProductDetail';

function ProductDetail() {
  const { AddToCart, RemoveToItem, SubTotalFunc, IncreaseQuantity, DecreaseQuantity } = useContext(MyContext);
  const {id} = useParams();
  const [productDetail, setProductDetails] = useState(null);

  useEffect(() => {
    
    async function fetch(){

      const product = await ProductAPI.FetchByProductId(id);
      setProductDetails(product);

    }

    fetch();
  }, [id])

  if (!productDetail) {
    return <h2>Loading...</h2>;   
  }
  
  return (
    <div id="section2">
      
      <div class="cardProduct">

        <div>
          <img id="pic" src={productDetail.image} alt="..."/>
        </div>

        <div class="textPart">
          <div>
           <h5>{productDetail.title}</h5>
           <h6>Price : {productDetail.price} Rs</h6>
           <p>Description : {productDetail.description}</p>
           
           </div>
           <div>
           <h6>Sub Total : {SubTotalFunc(productDetail.id)} Rs</h6>
              <button id="btn" type="button" className="btn btn-primary" onClick={() => AddToCart(productDetail)}>
                 Add to Cart <i className="bi bi-cart3"></i>
              </button>

             <i className="bi bi-plus" onClick={()=>IncreaseQuantity(productDetail.id)}></i> 
             <i className="bi bi-dash" onClick={()=>DecreaseQuantity(productDetail.id)}></i> 

              <button id="btn" type="button" className="btn btn-primary" onClick={() => RemoveToItem(productDetail.id)}>
                 Remove <i className="bi bi-cart3"></i>
              </button>
             </div>
        </div>

        
      </div>


    

      
    </div>
  )
}

export default ProductDetail