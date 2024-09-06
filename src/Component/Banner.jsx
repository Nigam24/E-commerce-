import React from 'react'
import "./Style.css"
function Banner() {
  return (
    <>
    <div className="pic">
        <img id="pic" src="/images/img.png" alt="" />
      </div>
      <div className="text">
        <p>
          <h2 id="t1">
            <b>FIND CLOTHES</b>
            <br />
          </h2>
          <h2 id="t2">
            <b>THAT MATCHES</b>
          </h2>
          <h2 id="t3">
            <b>YOUR STYLES</b>
          </h2>
        </p>
      </div>
      <div className="browse">
        <p>
          <h1 id="a3">
            Browse through our diverse range of meticulously crafted garments,
            designed
          </h1>
          <h2 id="a4">
            to bring out of your individuality and cater to your sense of style.
          </h2>
        </p>
        <button id="button">Shop Now</button>
      </div>
      <img id="zara" src="/images/zara.png" alt="" />
      <div class="quality">
        <div class="box">
          <div class="number">200+</div>
          <div id="b1">International Brands</div>
        </div>
        <div class="box">
          <div class="number">2,000+</div>
          <div id="b2">High-Quality Products</div>
        </div>
        <div class="box">
          <div class="number">30,000+</div>
          <div id="b3">Happy Customers</div>
        </div>
      </div>
      <h1 id="c1">
      </h1>
    </>
  )
}

export default Banner