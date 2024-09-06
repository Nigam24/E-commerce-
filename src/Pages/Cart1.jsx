import React from "react";
import "./cart.css";
import Navbar1 from "../Component/Navbar1";
import { useState, useEffect } from "react";
function Onsale() {
  const [count, setCount] = useState(0);

  useState(() => {
    console.log("Count updated:", count);
  }, [count]); // Only runs when 'count' changes
  return (
    <>
      <Navbar1></Navbar1>
      {/* <div class="breadcrumb">
        <a href="#">Home</a> &gt; <a href="#">Shop</a> &gt; <a href="#">Men</a> &gt; <a href="#">T-shirts</a>
    </div> */}
      <div id="orr"></div>
      <div className="link cart">
        <h4 id="is">Home > Shop > Men > T-shirt</h4>
      </div>
      <div className="cart img">
        <img id="ys" src="/images/pic2.png"></img>
      </div>
      <div className="ttt">
        <img id="yss" src="/images/pic2.png" />
      </div>
      <div className="wer">
        <img id="op" src="/images/pic3.png" />
      </div>
      <div className="ii">
        <img id="ops" src="/images/pic4.png" />
      </div>
      <h1 id="yy0">
        <b>ONE LIFE GRAPHIC T-SHIRT</b>
      </h1>
      <img id="ot" src="/images/star.png" />
      <div class="price">
        <span class="current-price">$260</span>
        <span class="original-price">$300</span>
        <span class="discount">-40%</span>
      </div>
      <h6 id="oo2">
        This graphic t-shirt which is perfect for any occasion.Crafted from a
        soft and
      </h6>
      <h6 id="tx">breathable fabric.it offers superior comfort and style.</h6>
      <div id="ttk"></div>
      <span id="rrp">Select Colors</span>
      <div className="colors">
        <div className="color brown"></div>
        <div className="color green"></div>
        <div className="color navy"></div>
      </div>
      <div id="tte"></div>
      <div className="select-size">
        <span id="ttp">Choose Size</span>
        <div className="sizes">
          <button>Small</button>
          <button>Medium</button>
          <button class="selected">Large</button>
          <button>X-Large</button>
        </div>
      </div>
      <div id="eet"></div>
      <div className="calculate">
        <p id="ke">{count}</p>
        <button id="e6" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button id="ee6" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
      <button id="add1">Add to Cart</button>
      <h1 id="ff">Product Details</h1>
      <div id="tre"></div>
      <p id="w2w">
        Sleek and timeless. Titanium glasses with innovative bridge.A frame to
        suit every face, Morgan is a classic panto shape. Named after James
        Morgan, the engineer who built the Ragent's canal, it features custom
        elements including fluid single piece bridge, adjustable nose pads and
        temple tips based on constantin.
      </p>
      <p id="ww">Brancusi Bird in space.</p>
    </>
  );
}

export default Onsale;
