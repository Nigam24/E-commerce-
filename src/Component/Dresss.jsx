import React from 'react'
import './Dress.css'
import { useNavigate } from "react-router-dom";
import NewArrival from './Onsale';
function Dresss() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(NewArrival);
  }
  return (
    <>
    <div className='body4'>
    <div class="dress">
        <h1>BROWSE BY DRESS STYLE</h1>
        <div class="grid">
          <div class="card">
            <img id="w1" src="/images/casual.png" alt="Casual" onClick={handleClick} />
            
          </div>
          <div class="cards">
            <img id="w2" src="/images/formal.png" alt="Formal" />
            
          </div>
          <div class="one">
            <img id="w3" src="/images/party.png" alt="Party" />
            
          </div>
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

