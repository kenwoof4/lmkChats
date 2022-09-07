import React from "react";
import "./style.scss"
import Add from "../img/addAvatar.png"

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">LmkChats</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{display:"none"}}type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
}
