import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let postElement = props.profilePage.postDate.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  const addNewPost = () => props.dispatch(addNewPostActionCreator());
  const updatePostText = (e) => {
    let newPost = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(newPost));
  };

  let newPostText = props.profilePage.newPostText;

  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea
        onChange={updatePostText}
        value={newPostText}
      ></textarea>
      <br />
      <button onClick={addNewPost}>Добавить</button>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
