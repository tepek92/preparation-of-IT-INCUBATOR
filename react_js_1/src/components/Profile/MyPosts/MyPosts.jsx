import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postDate = [
  { id: "1", message: "Всем хорошего дня!", likeCount: "44" },
  { id: "2", message: "С днем города!", likeCount: "13" },
  {
    id: "3",
    message: "Не всех можно потерять, но всех можно забыть :(",
    likeCount: "4",
  },
];

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      My posts
      <br />
      <textarea></textarea>
      <br />
      <button>Добавить</button>
      <div>
        <Post message={postDate[0].message} likeCount={postDate[0].likeCount} />
        <Post message={postDate[1].message} likeCount={postDate[1].likeCount} />
        <Post message={postDate[2].message} likeCount={postDate[2].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
