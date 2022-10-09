import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { Message } from "./Message";
export const Messages = () => {
  const [messages, setMessage] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessage(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id}/>
      ))}
    </div>
  );
};
