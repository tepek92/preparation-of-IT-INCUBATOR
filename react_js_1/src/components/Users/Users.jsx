import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/user.png"

const Users = (props) => {

  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => props.setUsers(response.data.items));
  }

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div>
            <img className={s.userAvatar} src={u.photos.small || userPhoto} alt="" />
            <div> {u.name} </div>
            <div> {u.status} </div>
            <button onClick={() => props.follow(u.id)}>
              {" "}
              {u.followed ? "Unfollow" : "Follow"}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
