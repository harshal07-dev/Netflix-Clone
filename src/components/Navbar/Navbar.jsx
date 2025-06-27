import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search_icon.svg";
import Bell_Icon from "../../assets/bell_icon.svg";
import Profile_icon from "../../assets/profile_img.png";
import dropDown_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={SearchIcon} alt="" className="icons" />
        <p>Children</p>
        <img src={Bell_Icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={Profile_icon} alt="" className="profile" />
          <img src={dropDown_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
