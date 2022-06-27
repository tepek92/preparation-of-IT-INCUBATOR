import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts postDate={props.profilePage.postDate} />
    </div>
  );
};

export default Profile;
