import React, { useContext, useEffect, useRef } from "react";
import { format } from "timeago.js";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const ref = useRef();

  console.log({ message });

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{format(message.date)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
