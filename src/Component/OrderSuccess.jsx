import React from "react"; 
import "./OrderSuccess.css"; 
import { Link } from "react-router-dom"; 
 
const OrderSuccess = () => { 
  return ( 
    <div className="order-success-wrapper"> 
      <div className="order-success-container"> 
        <div className="order-icon"> 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="checkmark-icon" 
          > 
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            /> 
          </svg> 
        </div> 
        <h1 className="success-message">Order Placed Successfully!</h1> 
        <p className="sub-message"> 
          Thank you for your purchase. Your order will be processed shortly. 
        </p> 
 
        <Link to="/" className="go-to-orders-btn"> 
          Go to Homepage 
        </Link> 
      </div> 
    </div> 
  ); 
}; 
 
export default OrderSuccess;