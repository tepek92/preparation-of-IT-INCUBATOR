import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogElement = props.dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>{dialogElement}</div>
      <div className={s.itemsMessages}>
        <Message
          addNewMessage={props.addNewMessage}
          messagesData={props.messagesData}
        />
      </div>
    </div>
  );
};

export default Dialogs;
