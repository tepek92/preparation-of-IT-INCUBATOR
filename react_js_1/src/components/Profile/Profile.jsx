import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts profilePage={props.profilePage} addNewPost={props.addNewPost} updateNewPost={props.updateNewPost}/>
    </div>
  );
};

export default Profile;
