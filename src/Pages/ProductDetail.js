import React, { useState,useEffect, useContext } from 'react'
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import ProductAPI from '../Services/ProductAPI';
import { MyContext } from '../Context/CartContext';

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
    <>
    <div>
      
     <h1>{productDetail.title}</h1>
    <h4>Sub Total : {SubTotalFunc(productDetail.id)} Rs</h4>
     
    </div>

      <button type="button" className="btn btn-primary" onClick={() => AddToCart(productDetail)}>
         Add to Cart <i className="bi bi-cart3"></i>
      </button>

      <i className="bi bi-plus" onClick={()=>IncreaseQuantity(productDetail.id)}></i> 
      <i className="bi bi-dash" onClick={()=>DecreaseQuantity(productDetail.id)}></i> 

      <button type="button" className="btn btn-primary" onClick={() => RemoveToItem(productDetail.id)}>
         Remove <i className="bi bi-cart3"></i>
      </button>
    </>
  )
}

export default ProductDetail