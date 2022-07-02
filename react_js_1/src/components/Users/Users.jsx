import React from "react";
import s from "./Users.module.css"


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
        [
            {
              id: 1,
              photo: "https://avatarko.ru/img/kartinka/12/multfilm_rusalka_Ariel_11649.jpg",
              followed: true,
              fullName: "Maria Savina",
              status: "Im HAPPY!",
              adress: { country: "France", city: "Paris" },
            },
            {
              id: 2,
              photo: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1950s-laika-space-dog-russian-matchbox-label-retro-graphics.jpg",
              followed: false,
              fullName: "Mustag",
              status: "Im DOG!",
              adress: { country: "France", city: "Paris" },
            },
            {
              id: 3,
              photo: "https://cs10.pikabu.ru/post_img/2019/02/03/6/1549186262135686997.jpg",
              followed: true,
              fullName: "Tom",
              status: "Im pitia!",
              adress: { country: "France", city: "Paris" },
            },
          ]
    );
        }

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div>
            <img className={s.userAvatar} src={u.photo} alt="" />
            <div> {u.fullName} </div>
            <div> {u.status} </div>
            <div> {u.adress.country} </div>
            <div> {u.adress.city} </div>
            <button onClick={() => (props.follow(u.id))}> {u.followed ? "Unfollow" : "Follow"} </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
