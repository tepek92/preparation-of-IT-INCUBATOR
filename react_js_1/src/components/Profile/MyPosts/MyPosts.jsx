import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postElement = props.postDate.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  const onSubmit = (formData) => {
    console.log(formData);
    props.addNewPost(formData.newpost);
  }
  
  return (
    <div className={s.myPosts}>
      My posts
      <ReduxPostForm onSubmit={onSubmit}/>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component="textarea" name="newpost" /></div>
      <div><button>Добавить</button></div>
    </form>
  );
};

const ReduxPostForm = reduxForm({form: "post"})(PostForm);

