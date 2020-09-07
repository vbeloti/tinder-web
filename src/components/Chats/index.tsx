import React from "react";

import "./styles.css";
import Chat from "../Chat";

const Chats: React.FC = () => {
  return (
    <div className="chats">
      <Chat
        name="Carol"
        message="Oi!"
        timestamp="50 segundos atrás"
        profilePic="https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg"
      />

      <Chat
        name="Natasha"
        message="Olá!"
        timestamp="10 segundos atrás"
        profilePic="https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_03.jpg"
      />

      <Chat
        name="Thor"
        message="Olá!"
        timestamp="50 segundos atrás"
        profilePic="https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg"
      />
    </div>
  );
};

export default Chats;
