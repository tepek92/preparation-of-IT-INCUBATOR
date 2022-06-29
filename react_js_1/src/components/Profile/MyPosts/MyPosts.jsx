import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { addNewPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postElement = props.profilePage.postDate.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let textElement = React.createRef();

  const clickButton = () => props.dispatch(addNewPostActionCreator());
  const updatePost = () => props.dispatch(updateNewPostTextActionCreator(textElement.current.value)); 

  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea onChange={ updatePost } ref={ textElement } value={props.profilePage.newPostText}></textarea>
      <br />
      <button onClick={ clickButton }>Добавить</button>
      <div>
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;
