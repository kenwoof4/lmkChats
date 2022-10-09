import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Message = ({ message }) => {
  const {currentUser} = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className={`message`}>
      <div className="messageInfo">
        <img
          src=""
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hell000000000</p>
        <img
          src="https://images.pexels.com/photos/13399952/pexels-photo-13399952.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};
