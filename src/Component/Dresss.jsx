import React from 'react'
import './Style.css'
function Dresss() {
  return (
    <>
    <div class="dress">
        <h1>BROWSE BY DRESS STYLE</h1>
        <div class="grid">
          <div class="card">
            <img id="w1" src="/images/casual.png" alt="Casual" />
            {/* <p>Casual</p> */}
          </div>
          <div class="cards">
            <img id="w2" src="/images/formal.png" alt="Formal" />
            {/* <p>Formal</p> */}
          </div>
          <div class="one">
            <img id="w3" src="/images/party.png" alt="Party" />
            {/* <p>Party</p> */}
          </div>
          <div class="two">
            <img id="w4" src="/images/gym.png" alt="Gym" />
            {/* <p>Gym</p> */}
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Dresss

