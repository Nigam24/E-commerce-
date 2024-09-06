// import './App.css';
import "./Component/Style.css"; //importing css
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Onsale from "./Component/Onsale";
import Shop from "./Component/Shop";
import NewArrival from "./Component/NewArrival";
import Brands from "./Component/Brands";
import Cart1 from "./Pages/Cart1";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dresss from "./Component/Dresss";
// import Home from "./Pages/Home";
// import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/Shop" element={<Shop />} />
            <Route path="Onsale" element={<Onsale />} />
            <Route path="NewArrival" element={<NewArrival />} />
            <Route path="Brands" element={<Brands />} />
            <Route path="Cart1" element={<Cart1 />} />
            <Route path="Login" element={<Login/>}/>
            <Route path="Signup" element={<Signup/>}/>
            <Route path="Dresss" element={<Dresss/>}/>
            
          <Route/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
