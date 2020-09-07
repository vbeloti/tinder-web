import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import logo from "../../assets/img/logo.svg";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

interface IHeader {
  backButton?: string;
}

const Header: React.FC<IHeader> = ({ backButton }) => {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
         <IconButton onClick={() => history.replace(backButton)}>
           <ArrowBackIosIcon fontSize="large" className="header__arrowBack" />
         </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <IconButton>
          <img className="header__logo" src={logo} alt="Tinder logo" />
        </IconButton>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
