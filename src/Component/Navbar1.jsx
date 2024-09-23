import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

function Navbar1() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // Check if the token exists in localStorage on component mount
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  function handleLogout() {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Update the state to trigger a re-render
    setIsLoggedIn(false);

    // Navigate to the home page or login page
    navigate("/");
  }

  return (
    <>
      <h1 id="hy">Shop.Co</h1>
      <div className="navbar1">
        <Link to="/">Shop</Link>
        <Link to="/onsale">On Sale</Link>
        <Link to="/NewArrival">New Arrival</Link>
        <Link to="/Brands">Brands</Link>
        <input className="gm" type="text" placeholder="Search for products..." />

        <Link to="/Cart1">
          <img id="cart" src="/images/Cart.png" alt="cart" />
        </Link>

        {isLoggedIn ? (
          <span
            id="user"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            LogOut
          </span>
        ) : (
          <Link to="/Login">
            <p id="log">Login</p>
          </Link>
        )}
      </div>
    </>
  );
}

export default Navbar1;

// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Style.css";
// function Navbar1() {
//   return (
//     <>
//       <h1 id="hy">Shop.Co</h1>
//       <div className="navbar1">
//         <Link to="/">shop</Link>  
//         <Link to="/onsale">onsale</Link>
//         <Link to="/NewArrival">NewArrival</Link>
//         <Link to="/Brands">Brands</Link>
//         <input class="gm" type="text" placeholder="Search for products..." />
//         <Link to="/Cart1">
//           <img id="cart" src="/images/Cart.png" />
//         </Link> 
//         <Link to="/login">
//         <img id="login" src="/images/Login.png"/>    
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Navbar1;