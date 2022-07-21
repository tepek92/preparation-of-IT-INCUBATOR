import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import s from "./Header.module.css";
import avatar from "../../img/user.png";



const Header = (props) => {

  return (
    <header className={s.header}>
      <img src={logo} alt="" />
      <div className={s.auth}>
        <span>
          <img className={s.avatar} alt="" src={props.userPhoto || avatar} />
        </span>
        <span>
          {props.isAuthorized 
          ? <div> <button onClick={props.logout}>logout</button> {props.login} </div>
          : <NavLink to="/login"><button>login</button></NavLink>}
        </span>
      </div>
    </header>
  );
};

export default Header;
