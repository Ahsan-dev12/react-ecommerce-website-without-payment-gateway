import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ id, image, title, price }) {
  return (
    <>
      <div className="card" style={{width:"18rem"}}>
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body">
          <Link to = '/productDetail'>  
          <h5 className="card-title">{title}</h5>
          </Link>
          <p className="card-text">{price}</p>
          <button type="button" class="btn btn-primary">Add to Cart  <i className="bi bi-cart3"></i></button>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
