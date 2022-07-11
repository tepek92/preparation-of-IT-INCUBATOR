import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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

  const followApi = (id, followStatus) => {
    if (followStatus) {
      axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${id}`, 
        {
          withCredentials: true,
          headers: {
          "API-KEY": "e8ed24d0-23ee-4a45-8d1a-2b102b174965"
          }
        }
      )
      .then((response) => {
        if(response.data.resultCode == 0) {
          props.follow(id);
        }
      });
    } else {
      axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "e8ed24d0-23ee-4a45-8d1a-2b102b174965"
            }
        }
      )
      .then((response) => {
        if(response.data.resultCode == 0) {
          props.follow(id);
        }
      });
    }


    
  }

  return (
    <div>
      <span onClick={() => props.setNewCurrentPage(1)}>{"<<<"}</span>
      {slicePage.map((p) => (
        <span
          className={p === props.currentPage && s.active}
          onClick={() => props.setNewCurrentPage(p)}
        >
          {" "}
          {p}
          {" "}
        </span>
      ))}
      <span onClick={() => props.setNewCurrentPage(pagesCount)}>{">>>"}</span>
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
            <button onClick={() => followApi(u.id, u.followed)}>
              {u.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;