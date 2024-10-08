import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewArrival.module.css";
import Card from "./Card";

function NewArrival() {
  const navigate = useNavigate();
  function handleClick(productId) {
    console.log("data");
    navigate(`/Productcard/${productId}`);
  }
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    console.log("data is coming");
    fetch("http://localhost:4000/products/getproduct?tag=newArrivals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setArrivals(data.products);
      });
  }, []);

  return (
    <>
      <div className={styles.body2}>
        <div id="new3" className={styles.new3}>
          NEW ARRIVALS
        </div>
        <div id="proList" className={styles.proList}>
          {arrivals && arrivals.map((product, index) => (
            <Card handleClick={handleClick} product={product} />
            ))}
        </div>
        <center>
          {/* <div id="view1" className={styles.view1}> */}
            {/* <button id="view3" className={styles.view3}>View All </button> */}
          {/* </div> */}
        </center>
      </div>
    </>
  );
}

export default NewArrival;
