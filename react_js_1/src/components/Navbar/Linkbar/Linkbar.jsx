import React from 'react';
import s from "./Linkbar.module.css";
import { NavLink } from "react-router-dom";

const LinkBar = (props) => {
  return (
      <div className={s.item}>
        <NavLink to={props.path} className={(navData) => navData.isActive ? s.active : ""}>{props.text}</NavLink>
      </div>
  );
};

export default LinkBar;
