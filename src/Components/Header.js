import { Link } from 'react-router-dom';
import React, { useState,useContext } from "react";
import { MyContext } from "../Context/CartContext";
import "./Header.css";


function Header({query, setQuery}) {
  const{cartItem, AddToCart} = useContext(MyContext)
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div>
          <a className="navbar-brand">E-commerce</a>
        </div>

        <div className="searchbar">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e)=>(setQuery(e.target.value))}/>
          </form>
        </div>

        <div>
          <Link to = "/cart">
          <i className="bi bi-cart3"></i>
          <span>{cartItem.length}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;






{/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </button> */}