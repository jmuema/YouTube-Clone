import React from "react";
import "./Header.css";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      {/* <h1>I am a Header</h1> */}
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="header__input">
        <input placeholder="Search"  type="text" alt="" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon  className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon  className="header__icon" />
        <Avatar
          alt="Muema"
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png "
        />
      </div>
    </div>
  );
}

export default Header;
