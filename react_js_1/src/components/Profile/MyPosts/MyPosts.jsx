import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postDate.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea></textarea>
      <br />
      <button>Добавить</button>
      <div>
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;
