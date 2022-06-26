import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let dialogsData = [
  { id: "1", name: "Pasha" },
  { id: "2", name: "Masha" },
  { id: "3", name: "Pupa" },
  { id: "4", name: "Lupa" },
];

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "Fine!" },
];

let dialogElement = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />);
let messageElement = messagesData.map(message => <Message message={message.message} />)

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>
        { dialogElement }
      </div>
      <div className={s.itemsMessages}>
        { messageElement }
      </div>
    </div>
  );
};

export default Dialogs;
