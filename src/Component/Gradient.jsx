import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gradiant.css';
function Gradiant() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Cart");
  }
    const[count,setCount] = useState(0);
    const [cartdata, setCartdata]=useState([0]);
    useEffect(() => {
      console.log("This is useEffect 1");
      fetch('http://localhost:4000/product/cartdata') // api for the get request
      .then(response => response.json())
      .then((data) => 
        { 
          console.log(data.cartdata)
          setCartdata(data.cartdata)
        });
       
    }, [])
  return (
    <>
    {
    cartdata && cartdata.map(( cartdata,index)=>
    (
     <><img id='gradiantshirt'onClick={handleClick} src={`${cartdata.url}`} />
     <h3 id='heading1'>{cartdata.title}</h3>
     <p id='size'>: {cartdata.size}</p>
     <p id='color1'>{cartdata.color}</p>
     
     <p id='dollar'>{cartdata.prize}</p>
     <Link to="/del">
        <img id='delete1' src='/Images/delete.png' />
      </Link>
      <div id='calculation'>
          <button id='buttong' onClick={() => setCount(count - 1)}>-</button>
          <span id='span'>{count}</span>
          <button id='buttongg' onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div id='gdiv'/>
        </>
     )
   )}; 
    </>
  )
}

export default Gradiant