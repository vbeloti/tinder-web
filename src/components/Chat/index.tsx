import React from "react";

import "./styles.css";
import { Avatar } from "@material-ui/core";

interface IChat {
  name: string;
  message: string;
  timestamp: string;
  profilePic: string;
}

const Chat: React.FC<IChat> = ({ name, message, timestamp, profilePic }) => {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
};

export default Chat;
