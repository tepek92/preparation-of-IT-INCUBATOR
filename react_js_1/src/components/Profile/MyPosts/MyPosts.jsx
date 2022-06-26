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

let postElement = postDate.map(p => <Post message={p.message} likeCount={p.likeCount} />)

const MyPosts = () => {
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
