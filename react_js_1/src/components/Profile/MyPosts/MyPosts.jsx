import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

class MyPosts extends React.Component {

  addNewPost = () => this.props.addNewPost();
  updatePostText = (e) => {
      let newPost = e.target.value;
      this.props.updateNewPostText(newPost);
    };

  render() {
    let postElement = this.props.postDate.map((p) => (
      <Post message={p.message} likeCount={p.likeCount} />
    ));

    let newPostText = this.props.newPostText;
    return (
      <div className={s.myPosts}>
        My posts
        <br />
        <textarea onChange={this.updatePostText} value={newPostText}></textarea>
        <br />
        <button onClick={this.addNewPost}>Добавить</button>
        <div>{postElement}</div>
      </div>
    );
  }
}

// const MyPosts = (props) => {
//   let postElement = props.postDate.map((p) => (
//     <Post message={p.message} likeCount={p.likeCount} />
//   ));

//   const addNewPost = () => props.addNewPost();
//   const updatePostText = (e) => {
//     let newPost = e.target.value;
//     props.updateNewPostText(newPost);
//   };

//   let newPostText = props.newPostText;
//   return (
//     <div className={s.myPosts}>
//       My posts
//       <br />
//       <textarea onChange={updatePostText} value={newPostText}></textarea>
//       <br />
//       <button onClick={addNewPost}>Добавить</button>
//       <div>{postElement}</div>
//     </div>
//   );
// };

export default MyPosts;
