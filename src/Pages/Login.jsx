import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import Navbar1 from "../Component/Navbar1";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUserChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Signup");
  }
  async function handleSignin() {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // if(data.jwtToken && data.success){
        //   localStorage.setItem("token", data.jwtToken);
        //   toast.success("Login Successfull");
        //   navigate("/");
        // } 
        if (data.jwtToken && data.success) {
          localStorage.setItem("token", data.jwtToken);
          toast.success("Login Successful");
          navigate("/");
        } else {
          // Add an alert message if the user does not exist or if the login fails
          toast.error("User does not exist or login failed. Please check That Your login or not.");
        }
        
      
        localStorage.setItem("token", data.jwtToken);
        console.log(data);
      });
  }

  return (
    <>
      <h1 id="LH">SHOP.CO</h1>
      <div className="login"> <img id="y1" src="/images/girl.png"></img>
       
      </div>
      <button id="but1">Login</button>
      <button id="but2" onClick={handleClick}>
        Sign Up
      </button>

      {/* content */}

      <h1 id="h1">
        <b>Sign In Page</b>
      </h1>
      <button id="r1" class="google-btn">
        Continue With Google
      </button>
      <div id="or"></div>
      <h2 id="r2">or</h2>
      <div id="or1"></div>
      <h2 id="r3">Email Address</h2>
      <input type="text"id="username"name="username"required onChange={handleUserChange}/>
      <h1 id="y3">Password</h1>
      <br />
      <input id="z2"type="text"required onChange={handlePasswordChange}></input>
      {/* <h2 id="y4">
        <u>Forget The Password</u>
      </h2> */}
      <button id="but3" onClick={handleSignin}>
        Sign In
      </button>
      <h1 id="pp1">
        
        Don't have an account?<u>Sign Up</u>
      </h1>
    </>
  );
}

export default Login;
