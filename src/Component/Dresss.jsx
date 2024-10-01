import React, { useEffect, useState } from "react";
import './Dress.css'
import { useNavigate } from "react-router-dom";
import Card from "./Card";
// import NewArrival from './Onsale';
function Dresss() {
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
    <div className='body4'>
    <div class="dress">
        <h1>BROWSE BY DRESS STYLE</h1>
        <div class="grid">
          <div class="card">
            <img id="w1" src="/images/casual.png" alt="Casual"/>
            
          </div>
          <div class="cards">
            <img id="w2" src="/images/formal.png" alt="Formal" />
            
          </div>
          <div class="one">
            <img id="w3" src="/images/party.png" alt="Party" />
            
          </div>
          {/* <div className="productlist">
        {arrivals && arrivals.map((product, index) => (
          <Card key={index} handleClick={handleClick} product={product} />
        ))}
      </div> */}
          <div class="two">
            <img id="w4" src="/images/gym.png" alt="Gym" />
          
           </div> 
        </div>
      </div>  
    </div>
    <div className='comment'>
      <img id='comm' src='/images/comment.png'></img>
    </div>
    <div className='footer'>
      <img id='footer1' src='/images/footer.png'></img>
    </div>
    </>
  )
}

export default Dresss

