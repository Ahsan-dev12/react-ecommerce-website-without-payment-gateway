import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { MyContext } from "../Context/CartContext";
import './ItemCard.css';


function ItemCard({ id, image, title, price }) {
  const{cartItem, AddToCart} = useContext(MyContext)
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to = { `/productDetail/${id}` }>   
          <p className="card-title">{title}</p>
          </Link>
          <p className="card-text">Price : {price} Rs</p>
          <button type="button" className="btn btn-primary" id="btn" onClick={() => AddToCart({id, image, title, price})}>
               Add to Cart <i className="bi bi-cart3"></i>
          </button>
          
        </div>
      </div>
    </>
  );
}

export default ItemCard;
