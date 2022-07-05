import React from "react";
// import s from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// const Profile = (props) => {
//   return (
//     <div>
//       <Profileinfo />
//       <MyPostsContainer />
//     </div>
//   );
// };

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Profileinfo />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;
