import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElement = props.postDate.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  const addNewPost = () => props.addNewPost();
  const updatePostText = (e) => {
    let newPost = e.target.value;
    props.updateNewPostText(newPost);
  };

  let newPostText = props.newPostText;
  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea onChange={updatePostText} value={newPostText}></textarea>
      <br />
      <button onClick={addNewPost}>Добавить</button>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
