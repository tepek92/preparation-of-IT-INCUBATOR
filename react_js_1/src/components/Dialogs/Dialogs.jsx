import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.itemDialog}>
        <div className={s.item}>Pasha</div>
        <div className={s.item}>Masha</div>
      </div>
      <div className={s.messages}>
        <div className={s.itemMessage}>Hi!</div>
        <div className={s.itemMessage}>How are you?</div>
      </div>
    </div>
  );
};

export default Dialogs;
