import React from "react";

import "./styles.css";

interface IChat {
  name: string;
  message: string;
  timestamp: string;
  profilePic: string;
}

const Chat: React.FC<IChat> = ({ name, message, timestamp, profilePic }) => {
  return <div className="chat"></div>;
};

export default Chat;
