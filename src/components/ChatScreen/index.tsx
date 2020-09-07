import React, { useState, MouseEvent } from "react";

import "./styles.css";
import { Avatar } from "@material-ui/core";

const ChatScreen: React.FC = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "Diana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
      message: "Ola",
    },
    {
      name: "Diana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
      message: "Como vai ?",
    },
    {
      message: "Bem e você ?",
    },
  ]);

  const handleSend = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput('');
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">VOCÊ DEU MATCH COM DIANA</p>
      {messages.map((message, index) =>
        message.name ? (
          <div key={index} className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Insira uma mensagem"
          type="text"
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
