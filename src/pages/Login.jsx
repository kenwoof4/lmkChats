import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./style.scss";

export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      setErr(false);
      const errMessage = document.getElementById("err");
      errMessage.textContent = "";
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      if (email && password) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } else {
        const errMessage = document.getElementById("err");
        if (!email) {
          errMessage.textContent = "Enter email!";
        } else if (!password) {
          errMessage.textContent = "Enter password!";
        }
      }
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">LmkChats</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
          <span id="err"></span>
        </form>
        <p>
          You don't have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
