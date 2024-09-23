import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onsale.module.css";
import Card from "./Card";
// import Navbar1 from "./Navbar1";

function NewArrival() {
  const navigate = useNavigate();
  
  function handleClick(productId) {
    navigate(`/Productcard/${productId}`);
  }

  const [arrivals, setArrivals] = useState([]);
  
  useEffect(() => {
    console.log("top selling is coming");
    fetch("http://localhost:4000/products/getproduct?tag=topSelling")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setArrivals(data.products);
      });
  }, []);

  return (
    <>
  
  <div className={styles.body3}>
  <div id="new4" className={styles.new4}>
          TOP SELLING
        </div>
      <div className={styles.productList}>
        {arrivals && arrivals.map((product, index) => (
          <Card key={index} handleClick={handleClick} product={product} />
        ))}
      </div>
      <center>
      {/* <button id="view" className={styles.view}>View All </button> */}
      </center>
    </div>
    </>
  );
}

export default NewArrival;
