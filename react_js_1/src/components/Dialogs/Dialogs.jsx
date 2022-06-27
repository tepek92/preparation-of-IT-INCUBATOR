import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElement = props.dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let messageElement = props.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>{dialogElement}</div>
      <div className={s.itemsMessages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
