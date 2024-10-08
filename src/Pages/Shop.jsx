import React from 'react'
import Navbar1 from '../Component/Navbar1'

import Dresss from '../Component/Dresss'

function Shop() {
  return (
    <>
        <Navbar1></Navbar1>
        <Dresss></Dresss>
    </>
  )
}

export default Shop






// import React from "react";
// import Navbar1 from "./Navbar1";
// // import Cart1 from "./Cart1";
// function Shop() {
//   return (
//     <>
    
//     <div className="background">
//       <Navbar1></Navbar1>
//       <div className="pic">
//         <img id="pic" src="/images/img.png" alt="" />
//       </div>
//       <div className="text">
//         <p>
//           <h2 id="t1">
//             <b>FIND CLOTHES</b>
//             <br />
//           </h2>
//           <h2 id="t2">
//             <b>THAT MATCHES</b>
//           </h2>
//           <h2 id="t3">
//             <b>YOUR STYLES</b>
//           </h2>
//         </p>
//       </div>
//       <div className="browse">
//         <p>
//           <h1 id="a3">
//             Browse through our diverse range of meticulously crafted garments,
//             designed
//           </h1>
//           <h2 id="a4">
//             to bring out of your individuality and cater to your sense of style.
//           </h2>
//         </p>
//         <button id="button">Shop Now</button>
//       </div>
//       <img id="zara" src="/images/zara.png" alt="" />
//       <div class="quality">
//         <div class="box">
//           <div class="number">200+</div>
//           <div id="b1">International Brands</div>
//         </div>
//         <div class="box">
//           <div class="number">2,000+</div>
//           <div id="b2">High-Quality Products</div>
//         </div>
//         <div class="box">
//           <div class="number">30,000+</div>
//           <div id="b3">Happy Customers</div>
//         </div>
//       </div>
//       <h1 id="c1">

//         {/* new arriavals code */}

//         <b>NEW ARRIVALS</b>
//       </h1>

//       <div class="shopping">
//         <div class="product">
//           <img id="n1" src="/images/new.png" alt="T-shirt with Tape Details" />
//           <h3 id="xcc">T-shirt with Tape Details</h3>
//           <h1 id="rating-a1">★★★★★ 4.5/5</h1>
//           <div class="price">$120</div>
//         </div>

//         <div class="product">
//           <img src="/images/jeans.png" alt="Skinny Fit Jeans" />
//           <h3>Skinny Fit Jeans</h3>
//           <div class="rating">★★★ 3.5/5</div>
//           <div class="price">$240</div>
//           <div class="discount">$260 -20%</div>
//         </div>
//         <div class="product">
//           <img src="/images/shirt.png" alt="Checkered Shirt" />
//           <h3>Checkered Shirt</h3>
//           <div class="rating">★★★★★ 4.5/5</div>
//           <div class="price">$180</div>
//         </div>

//         <div class="product">
//           <img src="/images/tshirt.png" alt="Sleeve Striped T-shirt" />
//           <h3>Sleeve Striped T-shirt</h3>
//           <div class="rating">★★★★★ 4.5/5</div>
//           <div class="price">$130</div>
//           <div class="discount">$160 -30%</div>
//         </div>
//       </div>

//       <button class="button">View All</button>
//       <h2>
//         {" "}
//         <div class="separator"></div>
//       </h2>

//         {/* top selling code */}

//       <h1 id="c2">
//         <b>TOP SELLING</b>
//       </h1>

//       <div class="shopping">
//         <div class="product">
//           <img
//             id="n1"
//             src="/images/tshirt.png"
//             alt="T-shirt with Tape Details"
//           />
//           <h3>T-shirt with Tape Details</h3>
//           <div class="rating">★★★★★ 4.5/5</div>
//           <div class="price">$120</div>
//         </div>

//         <div class="product">
//           <img src="/images/jeans.png" alt="Skinny Fit Jeans" />
//           <h3>Skinny Fit Jeans</h3>
//           <div class="rating">★★★ 3.5/5</div>
//           <div class="price">$240</div>
//           {/* <div class="discount">$260 -20%</div> */}
//         </div>

//         <div class="product">
//           <img src="/images/shirt.png" alt="Checkered Shirt" />
//           <h3>Checkered Shirt</h3>
//           <div class="rating">★★★★★ 4.5/5</div>
//           <div class="price">$180</div>
//         </div>

//         <div class="product">
//           <img src="/images/new.png" alt="Sleeve Striped T-shirt" />
//           <h3>Sleeve Striped T-shirt</h3>
//           <div class="rating">★★★★★ 4.5/5</div>
//           <div class="price">$130</div>
//           {/* <div class="discount">$160 -30%</div> */}
//         </div>
//       </div>
//       <button class="view">View All</button>

//       {/* dress style */}

//       <div class="dress">
//         <h1>BROWSE BY DRESS STYLE</h1>
//         <div class="grid">
//           <div class="card">
//             <img id="w1" src="/images/casual.png" alt="Casual" />
//             {/* <p>Casual</p> */}
//           </div>
//           <div class="cards">
//             <img id="w2" src="/images/formal.png" alt="Formal" />
//             {/* <p>Formal</p> */}
//           </div>
//           <div class="one">
//             <img id="w3" src="/images/party.png" alt="Party" />
//             {/* <p>Party</p> */}
//           </div>
//           <div class="two">
//             <img id="w4" src="/images/gym.png" alt="Gym" />
//             {/* <p>Gym</p> */}
//           </div>
//         </div>
//       </div>

//       {/* comments */}

//       <section class="testimonials">
//         <h2>Our Happy Customers</h2>
//         <div class="testimonial-container">
//           <div class="testimonial">
//             <div class="stars">★★★★★</div>
//             <h3>
//               Sarah M. <span class="verified">✔</span>
//             </h3>
//             <p>
//               "I'm blown away by the quality and style of the clothes I received
//               from Shop.co. From casual wear to elegant dresses, every piece
//               I've bought has exceeded my expectations.”
//             </p>
//           </div>
//           <div class="testimonial">
//             <div class="stars">★★★★</div>
//             <h3>
//               Alex K. <span class="verified">✔</span>
//             </h3>
//             <p>
//               "Finding clothes that align with my personal style used to be a
//               challenge until I discovered Shop.co. The range of options they
//               offer is truly remarkable, catering to a variety of tastes and
//               occasions.”
//             </p>
//           </div>
//           <div class="testimonial">
//             <div class="stars">★★★★★</div>
//             <h3>
//               James L. <span class="verified">✔</span>
//             </h3>
//             <p>
//               "As someone who's always on the lookout for unique fashion pieces,
//               I'm thrilled to have stumbled upon Shop.co. The selection of
//               clothes is not only diverse but also on-point with the latest
//               trends.”
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* last part */}
//     </div>
//     </>
//   );
// }

// export default Shop;
