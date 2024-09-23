// import React from 'react'
// import './Summary.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
// function Summary() {
// function onClick(){
//   alert("Are You Sure ")
// }
// const [ordersummary, setOrdersummary]=useState([0]);
// useEffect(() => {
//   console.log("This is useEffect 1");
//   fetch('http://localhost:4000/product/ordersummary') // api for the get request
//   .then(response => response.json())
//   .then((data) => 
//     { 
//       console.log(data.ordersummary)
//       setOrdersummary(data.ordersummary)
//     });
   
// }, [])
//   return (
//     <>
//     {
//     ordersummary && ordersummary.map(( ordersummary,index)=>
//     (
//     <><h2 id='order'>{ordersummary.order}</h2>
//     <p id='subtotal'>{ordersummary.subtotal}</p>
//     <p id='dol5'>{ordersummary.dol5}</p>
//     <p id='discount'>{ordersummary.discount}</p>
//     <p id='discount1'>{ordersummary.discount1}</p>
//     <p id='delivery'>{ordersummary.delivery}</p>
//     <p id='delivery1'>{ordersummary.delivery1}</p>
//     <div id='lin'></div>
//     <div id='lin2'></div>
//     <p id='totalc'>Total</p>
//     <p id='totalc1'>$218</p>
//    <img id="tag"  src={`${ordersummary.url1}`} /> 
//   <input id='promo' type='text' placeholder='                Add promo code' /> 
//     <button id='apply' onClick={onClick}>Apply</button>
//     <button id='goto1'>Go to Checkout</button></>
   
//     )
//   )}
//     </>
//   )
// }

// export default Summary