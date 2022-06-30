import s from "./Message.module.css";
import Firstuser from "./Firstuser/Firstuser";
import Seconduser from "./Seconduser/Seconduser";
import React from "react";
import {
  addNewMessageFirstUserActionCreator,
  updateNewMessageTextFirstUserActionCreator,
} from "../../../redux/dialogsReducer";

const Message = (props) => {
  let firstUser = props.dialogsPage.messagesData.firstUser.map((message) => (
    <Firstuser message={message.message} />
  ));
  let secondUser = props.dialogsPage.messagesData.secondUser.map((message) => (
    <Seconduser message={message.message} />
  ));

  const addNewMessage = () =>
    props.dispatch(addNewMessageFirstUserActionCreator());
  const updateNewMessageText = (e) => {
    let newMessage = e.target.value;
    props.dispatch(updateNewMessageTextFirstUserActionCreator(newMessage));
  };
  let updateMessageText = props.dialogsPage.messagesData.newFirstUserMessage;

  return (
    <div className={s.message}>
      <div className={s.first}>
        { firstUser }
        <textarea
          className={s.textarea}
          onChange={updateNewMessageText}
          value={updateMessageText}
        ></textarea>
        <br />
        <button onClick={addNewMessage}>Отправить</button>
      </div>
      <div className={s.second}>{ secondUser }</div>
    </div>
  );
};

export default Message;
