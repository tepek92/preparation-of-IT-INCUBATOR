import React from "react";
import s from "./Message.module.css";

import Firstuser from "./Firstuser/Firstuser";
import Seconduser from "./Seconduser/Seconduser";

const Message = (props) => {
  let firstUser = props.messagesData.firstUser.map((message) => (
    <Firstuser message={message.message} />
  ));
  let secondUser = props.messagesData.secondUser.map((message) => (
    <Seconduser message={message.message} />
  ));

  const addNewMessage = () => props.addNewMessage();
  const updateNewMessageText = (e) => {
    let newMessage = e.target.value;
    props.updateNewMessageText(newMessage);
  };
  let updateMessageText = props.messagesData.newFirstUserMessage;

  return (
    <div className={s.message}>
      <div className={s.first}>
        {firstUser}
        <textarea
          className={s.textarea}
          onChange={updateNewMessageText}
          value={updateMessageText}
        ></textarea>
        <br />
        <button onClick={addNewMessage}>Отправить</button>
      </div>
      <div className={s.second}>{secondUser}</div>
    </div>
  );
};

export default Message;
