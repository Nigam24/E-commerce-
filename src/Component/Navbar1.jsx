import React from "react";
import { Link } from "react-router-dom";
// import "./Style.css";
function Navbar1() {
  return (
    <>
      <h1 id="hy">Shop.Co</h1>
      <div className="navbar1">
        <Link to="/">shop</Link>  
        <Link to="/onsale">onsale</Link>
        <Link to="/NewArrival">NewArrival</Link>
        <Link to="/Brands">Brands</Link>
        <input class="gm" type="text" placeholder="Search for products..." />
        <Link to="/Cart1">
          <img id="cart" src="/images/Cart.png" />
        </Link> 
        <Link to="/login">
        <img id="login" src="/images/Login.png"/>    
        </Link>
      </div>
    </>
  );
}

export default Navbar1;
