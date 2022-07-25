import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {require, maxLength} from "../../../helpers/validators/Validators"
import { FormInputCreator } from "../../common/FormControler/FormControler";

const MyPosts = (props) => {
  let postElement = props.postDate.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  

  const onSubmit = (formData) => {
    console.log(formData);
    props.addNewPost(formData.newpost);
  }

    console.log("MYpost rerender");
  
  return (
    <div className={s.myPosts}>
      My posts
      <ReduxPostForm onSubmit={onSubmit}/>
      <div>{postElement}</div>
    </div>
  );
};

const maxLength50 = maxLength(50);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field validate={[require, maxLength50]} component={FormInputCreator} name="newpost" Element={"textarea"}/></div>
      <div><button>Добавить</button></div>
    </form>
  );
};

const ReduxPostForm = reduxForm({form: "post"})(PostForm);


export default MyPosts;