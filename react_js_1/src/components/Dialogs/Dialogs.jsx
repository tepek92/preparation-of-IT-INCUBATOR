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


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
        <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
      </div>
      <div className={s.itemsMessages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
