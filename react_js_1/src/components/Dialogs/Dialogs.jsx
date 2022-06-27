import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

//props == diakogsPage

const Dialogs = (props) => {
  
  

  let dialogElement = props.dialogsPage.dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  ));
  // let messageElement = props.dialogsPage.messagesData.map((message) => (
  //   <Message message={message.message} />
  // ));
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>{dialogElement}</div>
      <div className={s.itemsMessages}>
        <Message messagesData={props.dialogsPage.messagesData} />
      </div>

      {/* <div className={s.itemsMessages}>{messageElement}</div> */}
    </div>
  );
};

export default Dialogs;
