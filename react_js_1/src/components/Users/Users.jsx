import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/user.png";

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
      <span onClick={() => props.setNewCurrentPage(1)}>{"<<<"}</span>
      {slicePage.map((p) => (
        <span
          className={p === props.currentPage && s.active}
          onClick={() => props.setNewCurrentPage(p)}
        >
          {" "}
          {p}{" "}
        </span>
      ))}
      <span onClick={() => props.setNewCurrentPage(pagesCount)}>{">>>"}</span>
      {props.users.map((u) => {
        return (
          <div>
            <img
              className={s.userAvatar}
              src={u.photos.small || userPhoto}
              alt=""
            />
            <div> {u.name} </div>
            <div> {u.status} </div>
            <button onClick={() => props.follow(u.id)}>
              {u.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
