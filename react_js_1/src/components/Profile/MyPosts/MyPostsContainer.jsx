import MyPosts from "./MyPosts";
import { connect } from "react-redux";

import { addNewPost } from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    postDate: state.profilePage.postDate,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addNewPost })(MyPosts);

export default MyPostsContainer;
