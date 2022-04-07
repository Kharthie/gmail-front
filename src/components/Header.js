import React from "react";
import "../css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  var navigate = useNavigate();
  const exitaccount = () => {
    sessionStorage.clear();
    // localStorage.clear();
    navigate("/");
  };

  return (
    <div className=" header">
      <div className="header__left">
        <span className="material__icons">
          <MenuIcon />
        </span>
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Gmail-By-Google-PNG-Image.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <span className="material__icons">
          <SearchIcon />
        </span>
        <input placeholder="search" />
      </div>
      <div className="header__right">
        <span className="material__icons">
          <HelpOutlineIcon />
        </span>
        <span className="material__icons">
          <SettingsIcon />
        </span>
        <span className="material__icons">
          <AppsIcon />
        </span>
        <Avatar onClick={exitaccount} />
        <p>
          LogOut
          <br></br>⇦
        </p>
      </div>
    </div>
  );
};

export default Header;
