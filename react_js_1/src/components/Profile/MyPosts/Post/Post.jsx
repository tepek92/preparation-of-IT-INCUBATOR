import React from "react";
import s from "./Post.module.css";

// class Post extends React.Component {
//   render() {
//     console.log("post rerender");
//     return (
//       <div className={s.item}>
//         <img
//           src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg"
//           alt="avatar"
//         />
//         {this.props.message}
//         <div>Like: {this.props.likeCount}</div>
//       </div>
//     );
//   }
// }

const Post = (props) => {
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
