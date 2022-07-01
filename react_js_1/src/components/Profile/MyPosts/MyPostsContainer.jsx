import React from "react";
import MyPosts from "./MyPosts";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {

  const onAddNewPost = () => props.store.dispatch(addNewPostActionCreator());
  const onUpdatePostText = (newPost) => {
    props.store.dispatch(updateNewPostTextActionCreator(newPost));
  };
  
  return (
    <div>
      <MyPosts
        addNewPost={onAddNewPost}
        updateNewPostText={onUpdatePostText}
        postDate={props.store.getState().profilePage.postDate}
        newPostText={props.store.getState().profilePage.newPostText}
      />
    </div>
  );
};

export default MyPostsContainer;
