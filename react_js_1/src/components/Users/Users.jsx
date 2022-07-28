import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let page = [];
  let pagesCount = Math.ceil(props.totalCount / props.usersCountPage);

  for (let i = 1; i <= pagesCount; i++) {
    page.push(i);
  }

  let centralP = props.currentPage;
  let leftP = centralP - 5 < 0 ? 0 : centralP - 5;
  let rigtP = centralP + 5;

  let slicePage = page.slice(leftP, rigtP);

  return (
    <div>
      <button onClick={() => props.setNewCurrentPage(1)}>{"<<<"}</button>
      {slicePage.map((p) => (
        <button
          className={p === props.currentPage && s.active}
          onClick={() => props.setNewCurrentPage(p)}
        >
          {" "}
          {p}{" "}
        </button>
      ))}
      <button onClick={() => props.setNewCurrentPage(pagesCount)}>{">>>"}</button>
      {props.users.map((u) => {
        return (
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={s.userAvatar}
                src={u.photos.small || userPhoto}
                alt=""
              />
            </NavLink>
            <div> {u.name} </div>
            <div> {u.status} </div>
            <button
              disabled={props.isFollowedProgress.some((id) => id === u.id)}
              onClick={() => props.follow(u.id, u.followed)}
            >
              {u.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
