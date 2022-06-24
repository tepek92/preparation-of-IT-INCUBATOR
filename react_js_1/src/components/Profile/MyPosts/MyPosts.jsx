import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea></textarea>
      <br />
      <button>Добавить</button>
      <div>
        <Post message="Всем хорошего дня!" likeCount="23"/>
        <Post message="С днем города!" likeCount="13"/>
        <Post message="Не всех можно потерять, но всех можно забыть :(" likeCount="4"/>
      </div>
    </div>
  );
};

export default MyPosts;
