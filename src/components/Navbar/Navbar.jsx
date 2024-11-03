import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import ProfileImg from "../../assets/profile_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../firebase";



const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY >= 80) {
        navRef.current.classList.add('nav__dark')
      }
      else {
        navRef.current.classList.remove('nav__dark')
      }
    })
  },[])

  return (
    <div  ref={navRef} className="nav-bar">
      <div className="nav-bar__left">
        <img src={logo} alt="" className="nav-bar__left--logo" />
        <ul className="nav-bar__left--links">
          <li className="nav-bar__left--link">Home</li>
          <li className="nav-bar__left--link">TV Shows</li>
          <li className="nav-bar__left--link">Movies</li>
          <li className="nav-bar__left--link">New & Popular</li>
          <li className="nav-bar__left--link">My list</li>
          <li className="nav-bar__left--link">Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-bar__right">
        <FontAwesomeIcon icon="magnifying-glass" className="icons" />
        <p>Kids Zone</p>
        <FontAwesomeIcon icon="bell" className="icons" />
        <div className="nav-bar__profile">
          <img src={ProfileImg} className="profile" />
          <FontAwesomeIcon icon="caret-down" />
          <div className="drop-down">
            <p onClick={() => {logout()}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
