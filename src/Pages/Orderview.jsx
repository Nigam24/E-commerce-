import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Orderview.module.css"; // Add a CSS file for styling

const OrderView = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Check if the token exists
    if (!localStorage.getItem("token")) {
      navigate("/"); // Redirect if no token
    }
  }, [navigate]); // Add navigate to the dependency array

  const { data, error } = useFetch("/order/fetch");

  if (error) {
    return <div>Please order the product to see: </div>;
  }

  // Show loading while fetching data
  if (!data) {
    return <div>Loading...</div>;
  }

  // Handle the case where data is empty
  if (data.length === 0) {
    return <div>No orders found.</div>;
  }

  return (
    <div id="order-success">
      <a href="/"><h1 className="order-title" style={{color:"black"}}>My Order</h1></a>

      {data && (
        <ul className="order-list">
          {data.map((result) => (
            result.map((orderDetails) => (
              orderDetails && orderDetails.productDetails && ( // Add null check for orderDetails and productDetails
                <li key={orderDetails.productDetails._id} className="order-item">
                  <h2 className="order-id">Order ID: {orderDetails.productDetails._id}</h2>
                  <p className="user-id">User ID: {orderDetails.userId}</p>
                  <p className="order-subtotal">Subtotal: {orderDetails.subtotal}</p>
                  <p className="order-discount">Discount Amount: {orderDetails.discount}</p>
                  <p className="order-fee">Delivery Fee: {orderDetails.deliveryFee}</p>
                  <p className="order-total">Total: {orderDetails.total}</p>

                  <ul className="item-list">
                    <li key={orderDetails.productDetails._id} className="item">
                      <p className="item-title">Product Name: {orderDetails.productDetails.title}</p>
                      <p className="item-discount">Discount: ${orderDetails.productDetails.discount}</p>
                      <p className="item-color">Color: {orderDetails.productDetails.color} {orderDetails.color}</p>
                      <p className="item-size">Size: {orderDetails.productDetails.size} {orderDetails.size}</p>
                      <p className="item-quantity">Quantity: {orderDetails.quantity}</p>
                      <p className="item-price">Price: {orderDetails.price}</p>

                      <img
                        src={`data:${orderDetails.productDetails.image.fileType};base64,${orderDetails.productDetails.image.fileContent}`}
                        alt={orderDetails.productDetails.title}
                        className="item-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </li>
                  </ul>
                </li>
              )
            ))
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderView;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Orderview.module.css"; // Add a CSS file for styling

// const OrderView = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch orders when the component mounts
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");  // Redirect to login if token is missing
//           return;
//         }

//         const response = await fetch("http://localhost:4000/order/fetch", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json", // Ensures we send a JSON request
//           },
//         });
//         if (!response.ok) {
//           // Check if response is not OK (404, 500, etc.)
//           const errorText = await response.text(); // Get the response text for debugging
//           throw new Error(`Failed to fetch orders: ${response.status} - ${errorText}`);
//         }

//         const data = await response.json(); // Parse JSON if the response is successful
//         setOrders(data); // Store the orders in state
//         setLoading(false); // Set loading to false once orders are fetched
//       } catch (err) {
//         setError(err.message); // Set error message in state
//         setLoading(false); // Stop loading if there’s an error
//       }
//     };

//     fetchOrders(); // Call the function when the component mounts
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (orders.length === 0) {
//     return <div>No orders found</div>;
//   }

//   return (
//     <div className="order-view">
//       <h2>Your Orders</h2>
//       {orders.map((order) => (
//         <div key={order._id} className="order-card">
//           <h3>Order ID: {order._id}</h3>
//           <p>Placed on: {new Date(order.placedAt).toLocaleDateString()}</p>
//           <p>Total: ${order.total.toFixed(2)}</p>
//           <p>Subtotal: ${order.subtotal.toFixed(2)}</p>
//           <p>Discount: ${order.discount ? order.discount.toFixed(2) : "0.00"}</p>
//           <p>Delivery Fee: ${order.deliveryFee.toFixed(2)}</p>
//           <h4>Items:</h4>
//           <ul>
//             {order.items.map((item) => (
//               <li key={item.productId}>
//                 <strong>{item.title}</strong> - {item.size}, {item.color} - {item.quantity} x ${item.price.toFixed(2)}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderView;










// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Orderview.css"; // Add a CSS file for styling

// const OrderView = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch orders when the component mounts
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         const response = await fetch("/order/fetch", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch orders");
//         }

//         const data = await response.json();
//         setOrders(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (orders.length === 0) {
//     return <div>No orders found</div>;
//   }

//   return (
//     <div className="order-view">
//       <h2>Your Orders</h2>
//       {orders.map((order) => (
//         <div key={order._id} className="order-card">
//           <h3>Order ID: {order._id}</h3>
//           <p>Placed on: {new Date(order.placedAt).toLocaleDateString()}</p>
//           <p>Total: ${order.total.toFixed(2)}</p>
//           <p>Subtotal: ${order.subtotal.toFixed(2)}</p>
//           <p>Discount: ${order.discount ? order.discount.toFixed(2) : "0.00"}</p>
//           <p>Delivery Fee: ${order.deliveryFee.toFixed(2)}</p>
//           <h4>Items:</h4>
//           <ul>
//             {order.items.map((item) => (
//               <li key={item.productId}>
//                 <strong>{item.title}</strong> - {item.size}, {item.color} - {item.quantity} x ${item.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderView;
