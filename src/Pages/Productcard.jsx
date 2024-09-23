import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postData } from "../utils/apiCall";
import Navbar1 from "../Component/Navbar1";
import styles from "../Pages/Productcard.module.css";

function Productdetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [color, setColor] = useState("sandy");
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Small");

  async function handleClick() {
    // Check if token exists (indicating user is logged in)
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, show an alert and navigate to login page
      alert("You are not logged in. Please log in or create an account.");
      navigate("/login");
      return;
    }

    // If token exists, proceed with adding to cart
    try {
      const response = await postData("/add/cart", {
        product_id: productId,
        quantity: count,
        color,
        size,
        token, // Pass token in request headers if necessary
      });
      console.log(response);

      // Navigate to the cart page after successful addition
      navigate("/Cart1");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:4000/product/single?productId=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  return (
    data && (
      <>
        <Navbar1 />
        <div id="heading1" className={styles.heading1}>
          Product Details Page ---
        </div>
        <img
          id="shirtts2"
          className={styles.shirtts2}
          src={`data:${data.image.fileType};base64,${data.image.fileContent}`}
        />
        <h1 id="onelife" className={styles.onelife}>
          {data.title}
        </h1>
        <p id="productpara12" className={styles.productpara12}>
          {data.description}
        </p>
        <p id="prating" className={styles.prating}>
          {data.rating}
        </p>
        <p id="productprice23" className={styles.productprice23}>
          ${data.price}
        </p>
        <p id="selectcolor12" className={styles.selectcolor12}>
          Select Colors
        </p>
        <div className={styles.colors12}>
          <button
            className={`sandy ${color === "sandy" ? "selected" : ""} ${styles.c1}`}
            type="button"
            onClick={() => setColor("sandy")}
          ></button>
          <button
            className={`green ${color === "green" ? "selected" : ""} ${styles.c2}`}
            type="button"
            onClick={() => setColor("green")}
          ></button>
          <button
            className={`blue ${color === "blue" ? "selected" : ""} ${styles.c3}`}
            type="button"
            onClick={() => setColor("blue")}
          ></button>
        </div>

        <p id="choosesize" className={styles.choosesize}>Choose Size</p>
        <div className="sizee11">
          <button className={styles.small} type="button" onClick={() => setSize("Small")}>
            Small
          </button>
          <button className={styles.Medium} type="button" onClick={() => setSize("Medium")}>
            Medium
          </button>
          <button className={styles.Large} type="button" onClick={() => setSize("Large")}>
            Large
          </button>
        </div>

        <div className={styles.calculation1}>
          <button className={styles.buttong1} onClick={() => setCount(count - 1)} disabled={count <= 1}>
            -
          </button>
          <span className={styles.span1}>{count}</span>
          <button className={styles.buttongg1} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>

        <button className={styles.Addc} type="button" onClick={handleClick}>
          Add to Cart
        </button>
      </>
    )
  );
}

export default Productdetails;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import NewArrival from "../Component/Onsale";
// import { useStore } from "../services/lib/zustand";
// import styles from "../Pages/Productcard.module.css";
// import { useFetch } from "../hooks/useFetch";
// import { useParams } from "react-router-dom";
// import Onsale from "../Component/Onsale";
// import Card from "../Component/Card";
// import { postData } from "../utils/apiCall";
// import Navbar1 from "../Component/Navbar1";

// function Productdetails() {
//   // const { productId } = useStore();
//   const { productId } = useParams();
//   const navigate = useNavigate();

//   console.log(productId);

//   // const { data, error } = useFetch(/product/single?productid=${productId});

//   // console.log("data", data);
//   // console.log("error", error);

//   //   console.log(productId)
//   //function handleClick() {}
//   const [data, setData] = useState();
//   const [color, setColor] = useState("sandy");
//   const [count, setCount] = useState(1);
//   const [size, setSize] = useState("Small");

//   async function handleClick() {
//     try {
//       const data = await postData("/add/cart", {
//         product_id: productId,
//         quantity: count,
//         color,
//         size,
//       });
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//     navigate("/Cart1");
//   }

//   useEffect(() => {
//     if (productId) {
//       console.log(productId);

//       fetch(`http://localhost:4000/product/single?productId=${productId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           // console.log(data);
//           setData(data);
//         })
//         .catch((error) => console.error("Error fetching product:", error));
//     }
//   }, [productId]);

//   return (
//     data && (
//       <>
//         {console.log(data)}
//         <Navbar1></Navbar1>
//         <div id="heading1" className={styles.heading1}>
//           Product Details Page ---
//         </div>
//         <img
//           id="shirtts2"
//           className={styles.shirtts2}
//           src={`data:${data.image.fileType};base64,${data.image.fileContent}`}
//         />
//         <h1 id="onelife" className={styles.onelife}>
//           {data.title}
//         </h1>
//         <p id="productpara12" className={styles.productpara12}>
//           {data.description}{" "}
//         </p>
//         <p id="prating" className={styles.prating}>
//           {data.rating}
//         </p>
//         <p id="productprice23" className={styles.productprice23}>
//           ${data.price}
//         </p>
//         <p id="selectcolor12" className={styles.selectcolor12}>
//           Select Colors
//         </p>
//         <div className={styles.colors12}>
//           <button
//             className={`sandy ${color === "sandy" ? "selected" : ""} ${
//               styles.c1
//             }`}
//             type="button"
//             onClick={() => setColor("sandy")}
//           ></button>
//           <button
//             className={`green ${color === "green" ? "selected" : ""} ${
//               styles.c2
//             }`}
//             type="button"
//             onClick={() => setColor("green")}
//           ></button>
//           <button
//             className={`blue ${color === "blue" ? "selected" : ""} ${
//               styles.c3
//             }`}
//             type="button"
//             onClick={() => setColor("blue")}
//           ></button>
//         </div>
//         {/* <div className="producthr1"></div> */}
//         <p id="choosesize" className={styles.choosesize}>Choose Size</p>
//         <div className="sizee11">
//         <button className={styles.small} type="button">
//           Small
//         </button>
//         <button className={styles.Medium} type="button">
//           Medium
//         </button>
//         <button
//           className={styles.Large}
//           type="button"
//           onClick={() => setSize("Large")}
//         >
//           Large
//         </button>
//         {/* <button
//           className="X-Largee"
//           type="button"
//           onClick={() => setSize("X-Large")}
//         >
//           X-Large
//         </button> */}
//         </div>
//         <div className="producthr2"> </div>
//         <div className={styles.calculation1}>
//           <button className={styles.buttong1} onClick={() => setCount(count - 1)}>
//             -
//           </button>
//           <span className={styles.span1}>{count}</span>
//           <button className={styles.buttongg1} onClick={() => setCount(count + 1)}>
//             +
//           </button>
//         </div>
//         <button className={styles.Addc} type="button" onClick={handleClick}>
//           Add to Cart
//         </button>
//         {/* <p id="productdetail">Product Deatils</p>
//         <div className="producthr3"></div>
//         <p id="sleek">
//           Sleek and timeless. Titanium glasses with an innovative bridge. A
//           frame to suit every face, Morgan is a classic <br />
//           'panto' shape. Named after James Morgan, the engineer who built the
//           Regent's Canal, it features custom
//           <br /> elements including fluid single piece bridge, adjustable nose
//           pads and temple tips based on Constantin
//           <br /> Brâncuşi's Bird in Space.
//         </p>
//         <p id="sleek">
//           Sleek and timeless. Titanium glasses with an innovative bridge. A
//           frame to suit every face, Morgan is a classic <br />
//           'panto' shape. Named after James Morgan, the engineer who built the
//           Regent's Canal, it features custom
//           <br /> elements including fluid single piece bridge, adjustable nose
//           pads and temple tips based on Constantin
//           <br /> Brâncuşi's Bird in Space.
//         </p>
//         <ul>
//           <li id="lis">99.7% pure titanium front</li>
//           <li id="lis">More than 4hv on the Vickers hardness test.</li>
//           <li id="lis">lon plated to over 0.3μ</li>
//           <li id="lis">Weighs under 5.0g</li>
//           <li id="lis">Adjustable titanium nose pads for a comfortable fit</li>
//           <li id="lis">UV protection</li>
//         </ul>
//         <div className="producthr4"></div> */}
//         {/* <h1>
//           {" "}
//           <center>YOU MIGHT ALSO LIKE</center>
//         </h1> */}
//       </>
//     )
//   );
// }
// export default Productdetails;
