import presswall from "../../img/presswall.jpg";
import avatar from "../../img/avatar.jpg";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.presswall} src={presswall} alt="presswall" />
      </div>
      <div>
        <img className={s.avatar} src={avatar} alt="avatar" /> + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
