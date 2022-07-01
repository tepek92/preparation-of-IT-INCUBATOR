import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  debugger
  return (
    <div className={s.item}>
      <img
        src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg"
        alt="avatar"
      />
      {props.message}
      <div>Like: {props.likeCount}</div>
    </div>
  );
};

export default Post;
