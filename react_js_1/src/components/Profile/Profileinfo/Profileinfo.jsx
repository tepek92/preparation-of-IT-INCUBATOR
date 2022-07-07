import React from "react";
import presswall from "../../../img/presswall.jpg";
import avatar from "../../../img/user.png";
import s from "./Profileinfo.module.css";
import Preloader from "../../common/Preloader/Preloader"

const Profileinfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={s.presswall} src={presswall} alt="presswall" />
      </div>
      <div>
        <div>{props.userProfile.fullName}</div>
        <img className={s.avatar} src={props.userProfile.photos.large || avatar} alt="avatar" />
        <div>Обо мне: {props.userProfile.aboutMe}</div>
        <div>{props.userProfile.lookingForAJob ? props.userProfile.lookingForAJobDescription : "Уже работаю"}</div>
        <div className={s.link}>
          Где меня найти:
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.facebook}>facebook</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.website}>website</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.vk}>vk</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.twitter}>twitter</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.instagram}>instagram</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.youtube}>youtube</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.github}>github</a></div>
          <div>{"==> "}<a href={"https://" + props.userProfile.contacts.mainLink}>mainLink</a></div>
        </div>
      </div>
    </div>
  );
};

export default Profileinfo;
