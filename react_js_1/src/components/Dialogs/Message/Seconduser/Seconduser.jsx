import s from "./Seconduser.module.css";

const Seconduser = (props) => {
  return (
    <div className={s.user}>
      <div className={s.text}>{props.message}</div>
    </div>
  );
};

export default Seconduser;
