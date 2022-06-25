import s from "./Dialogs.module.css";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>
        <Dialog id="1" name="Pasha" />
        <Dialog id="2" name="Masha" />
        <Dialog id="3" name="Pupa" />
        <Dialog id="4" name="Lupa" />
      </div>
      <div className={s.itemsMessages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Im fine thanks" />
      </div>
    </div>
  );
};

export default Dialogs;
