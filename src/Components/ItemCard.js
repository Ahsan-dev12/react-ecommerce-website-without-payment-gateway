import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { MyContext } from "../Context/CartContext";

function ItemCard({ id, image, title, price }) {
  const{cartItem, AddToCart} = useContext(MyContext)
  return (
    <>
      <div className="card" style={{width:"18rem"}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to = { `/productDetail/${id}` }>   
          <h5 className="card-title">{title}</h5>
          </Link>
          <p className="card-text">{price}</p>
          <button type="button" className="btn btn-primary" onClick={() => AddToCart({id, image, title, price})}>
               Add to Cart <i className="bi bi-cart3"></i>
          </button>
          
        </div>
      </div>
    </>
  );
}

export default ItemCard;
