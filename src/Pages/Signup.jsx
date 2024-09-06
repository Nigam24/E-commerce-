import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

//import { useAuth } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUserChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleClick() {
    navigate("/Login");
  }

  async function handleSignup() {
    const response = await fetch("http://localhost:4000/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.jwtToken && data.success) {
          localStorage.setItem("token", data.jwtToken);

          toast.success('🦄"sign up succecced! Now You Are In Login Page')
          navigate("/Login");
      
        } else {
          toast.warning(data.message);
        }
      })
      .catch((er) => {
        console.log(er);
      });
  }
  return (
    <>
      <h1 id="LH">SHOP.CO</h1>
      <div className="login">
        {" "}
        <img id="y1" src="/images/girl.png"></img>
      </div>
      <button id="but1">Login</button>
      <button id="but2">Sign Up</button>

      {/* content */}

      <button id="but1" onClick={handleClick}>
        Login
      </button>
      <h1 id="h1">
        <b>Sign Up Page</b>
      </h1>
      <h2 id="r3">User Name</h2>
      <input type="text"id="username"name="username"required onChange={handleUserChange}/>
      <h2 id="r3">Email address</h2>
      <input
        type="text"
        id="username"
        name="email"
        required
        onChange={handleUserChange}
      />
      <h1 id="y3">Password</h1>
      <br />
      <input id="z2" type="text" required onChange={handlePasswordChange} />
      <button id="but3" onClick={handleSignup}>
        Sign Up
      </button>
      <h1 id="pp1">
        Don't have an account?<u>Sign Up</u>
      </h1>
    </>
  );
}

export default Signup;
