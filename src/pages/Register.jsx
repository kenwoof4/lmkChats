import React, { useState } from "react";
import "./style.scss";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [err, setErr] = useState(false);
  const navigate= useNavigate();
  const handleSubmit = async (e) => {
    setErr(false);
    const errMessage = document.getElementById("err");
    errMessage.textContent = "";
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    if (displayName && email && password && file) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, displayName);

        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid),{});
            navigate("/")
          });
        });
      } catch (err) {
        setErr(true);
      }
    } else {
      const errMessage = document.getElementById("err");
      if (!displayName) {
        errMessage.textContent = "Missing display name!";
      } else if (!email) {
        errMessage.textContent = "Missing email!";
      } else if (!password) {
        errMessage.textContent = "Missing password!";
      } else if (!file) {
        errMessage.textContent = "Missing avatar!";
      }
    }
  };

  const handleImageChange = () => {
    const input = document.getElementById("file");
    const preview = document.querySelector(".preview");
    input.addEventListener("change", () => {
      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }
      // @ts-ignore
      const curFiles = input.files[0];
      const para = document.createElement("p");
      if (curFiles.length === 0) {
        para.textContent = "No files currently selected for upload";
      } else {
        para.textContent = `File name: ${curFiles.name}`;
        preview.appendChild(para);
      }
    });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">LmkChats</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input
            onClick={handleImageChange}
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <div className="preview"></div>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
          <span id="err"></span>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
}
