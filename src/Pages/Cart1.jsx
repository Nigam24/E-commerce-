 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import OrderSuccess from "../Component/OrderSuccess.jsx";
// import { TailSpin } from "react-loader-spinner";
import { useFetch } from "../hooks/useFetch.js";
import { deleteData, postData, putData } from "../utils/apiCall.js";
import Navbar1 from "../Component/Navbar1.jsx";

function Cart() {

  
  const [cartItems, setCartItems] = useState();
  const [showOrder, setShowOrder] = useState(false);
  // const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const discountRate = 0.2;
  const deliveryFee = 15;



  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/cart1");
    }
  }, [navigate]);

  const { data, error } = useFetch(`/add/cart`);

  useEffect(() => {
    setCartItems(data);
  }, [data]);

  console.log(cartItems);

  const handleIncrement = async (id) => {
    try {
      //console.log(product_id);
      const result = await putData("/add/cart", {
        productId: id
      });

      if (result) {
        setCartItems(
          cartItems.map((item) =>
            item.product_id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Failed to increment item quantity", error);
    }
  };

  const handleDecrement = async (id) => {
    try {
      await putData("/decrease?productId=" + id);
      setCartItems(
        cartItems.map((item) =>
          item.product_id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error("Failed to decrement item quantity", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await deleteData("/add/cart?productId=" + id);
      setCartItems(cartItems.filter((item) => item.product_id !== id));
    } catch (error) {
      console.error("Failed to remove item", error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce(
        (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
        0
      )
      .toFixed(2);
  };

// Discount calculation: Ensures the discount is applied on the valid subtotal
const calculateDiscount = () => {
  const subtotal = parseFloat(calculateSubtotal());
  if (subtotal <= 0) return 0;

  return (subtotal * discountRate).toFixed(2);
};

// Total calculation: Ensures proper addition and valid delivery fee handling
const calculateTotal = () => {
  const subtotal = parseFloat(calculateSubtotal());
  const discount = parseFloat(calculateDiscount());
  const validDeliveryFee = deliveryFee > 0 ? deliveryFee : 0;

  return (subtotal - discount + validDeliveryFee).toFixed(2);
};

  const handleset = () => {
    postData("/order/create", {
      items: cartItems,
      subtotal: calculateSubtotal(),
      discount: calculateDiscount(),
      deliveryFee,
      total: calculateTotal(),
    });
  };

  return (
    <>
     {/* <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /> */}
    <Navbar1></Navbar1>
      {console.log(cartItems)}
{showOrder ? (
        <OrderSuccess />
      ) : (
        cartItems && (
          <div className="shopping-cart">
            <div className="cart-items"> 
              <h2>Your Cart</h2>
              {cartItems.map((item) => (
                <div key={item.product_id} className="cart-item">
                  <img
                    src={`data:${item.image.fileType};base64,${item.image.fileContent}`}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                    <h3>
                      <p>${item.price}</p>
                    </h3>
                  </div>
                  <div className="item-controls">
                    <button onClick={() => handleDecrement(item.product_id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.product_id)}>
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.product_id)}
                    className="remove-item"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>
                Subtotal: <span>${calculateSubtotal()}</span>
              </p>
              <p id="discount">
                Discount (-{discountRate * 100}%):{" "}
                <span>-${calculateDiscount()}</span>
              </p>
              <p>
                Delivery Fee: <span>${deliveryFee}</span>
              </p>
              <h4>
                Total: <span id="total">${calculateTotal()}</span>
              </h4>

              <input
                type="text"
                placeholder="Add promo code"
                className="promo-code-input"
              />
              <button className="apply-promo-button">Apply</button>
              <button
                className="checkout-button"
                onClick={() => {
                  setShowOrder(true);
                  handleset()
                  
                }}
              >
                Order
              </button>
            </div>
          </div>
        )
      )}
    </>
  
  );
}

export default Cart;