import React from "react";
import Navbar1 from "../Component/Navbar1";
import "./neww.css";
import { useEffect, useState } from "react";

function NewArrival() {


  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(
          "http://localhost:4000/api/products/allproducts"
        );
        const result = await res.json();
        console.log(result);
        setData(result);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {/* <Navbar1></Navbar1> */}
      {/* new arriavals code */}
        <h1 id="c1">
          <b>NEW ARRIVALS</b>
        </h1>
        <div class="shopping">
        
            <div class="product">
            <img src="/images/jeans.png" alt="Skinny Fit Jeans" />
            <h3 id="xcc">Skinny Fit Jeans</h3>
            <h1 id="rating-a1">★★★ 3.5/5</h1>
            <div class="price">$240</div>
          </div>
            

        <div class="product">
          <img src="/images/jeans.png" alt="Skinny Fit Jeans" />
          <h3>Skinny Fit Jeans</h3>
          <div class="rating">★★★ 3.5/5</div>
          <div class="price">$240</div>
          <div class="discount">$260 -20%</div>
        </div>
        <div class="product">
          <img src="/images/shirt.png" alt="Checkered Shirt" />
          <h3>Checkered Shirt</h3>
          <div class="rating">★★★★★ 4.5/5</div>
          <div class="price">$180</div>
        </div>

        <div class="product">
          <img src="/images/tshirt.png" alt="Sleeve Striped T-shirt" />
          <h3>Sleeve Striped T-shirt</h3>
          <div class="rating">★★★★★ 4.5/5</div>
          <div class="price">$130</div>
          <div class="discount">$160 -30%</div>
        </div>
      </div>
      {/* start's  here Footer  */}
      {/* <footer>
        <div class="newsletter">
          <h2>Stay up to date about our latest offers</h2>
          <div class="newsletter-signup">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe to Newsletter</button>
          </div>
        </div>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Shop.co</h3>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div class="social-icons">
              <a href="#">
                <img src="" alt="Twitter" />
              </a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>FAQ</h4>
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">YouTube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div class="payment-icons">
            <img src="visa-icon.png" alt="Visa" />
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default NewArrival;
