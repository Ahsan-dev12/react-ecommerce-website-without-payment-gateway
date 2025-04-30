import React, { useContext, useEffect,useState } from "react";
import "./Cart.css";
import { MyContext } from "../Context/CartContext";
import ProductAPI from '../Services/ProductAPI';

function Cart() {
  const { IncreaseQuantity, DecreaseQuantity, cartItem, ClearCart, SubTotalFunc, TotalSum } = useContext(MyContext);
 
  return (

    <>
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">SubTotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.title}</td>
                <td>
                  <span>
                  {product.quantity}
                  <i className="bi bi-plus" onClick={()=>IncreaseQuantity(product.id)}></i> 
                  <i className="bi bi-dash" onClick={()=>DecreaseQuantity(product.id)}></i> 
                  </span>
                  
                </td>
                <td>${product.price} Rs</td>
                <td>{SubTotalFunc(product.id)} Rs</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <h3>Total : {TotalSum()}Rs</h3>
        <button type="button" className="btn btn-primary" onClick={ClearCart}>
         All Remove <i className="bi bi-cart3"></i>
        </button>
      </div>
    </>
  );
}

export default Cart;
