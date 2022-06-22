import presswall from "../img/presswall.jpg"
import avatar from "../img/avatar.jpg"
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.presswall} src={presswall} alt="presswall"/>
      </div>
      <div>
        <img className={s.avatar} src={avatar} alt="avatar"/> +
        description
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
