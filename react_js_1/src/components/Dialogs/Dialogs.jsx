import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Pasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Masha</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.itemMessage}>Hi!</div>
        <div className={s.itemMessage}>How are you?</div>
      </div>
    </div>
  );
};

export default Dialogs;
