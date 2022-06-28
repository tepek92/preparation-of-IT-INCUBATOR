import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postElement = props.postDate.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let textElement = React.createRef();
  const clickButton = () => alert(textElement.current.value);


  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea ref={ textElement }></textarea>
      <br />
      <button onClick={ clickButton }>Добавить</button>
      <div>
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;
