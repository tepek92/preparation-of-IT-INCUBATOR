import s from "./Message.module.css";
import Firstuser from "./Firstuser/Firstuser";
import Seconduser from "./Seconduser/Seconduser";
import React from "react";
import { addNewMessageFirstUserActionCreator, updateNewMessageTextFirstUserActionCreator } from "../../../redux/state";

const Message = (props) => {
  let firstUser = props.dialogsPage.messagesData.firstUser.map((message) => (
    <Firstuser message={message.message} />
  ));
  let secondUser = props.dialogsPage.messagesData.secondUser.map((message) => (
    <Seconduser message={message.message} />
  ));

  let textElement = React.createRef();
  const clickButtom = () =>
    props.dispatch(addNewMessageFirstUserActionCreator());
  const updateMessage = () =>
    props.dispatch(updateNewMessageTextFirstUserActionCreator(textElement.current.value));

  return (
    <div className={s.message}>
      <div className={s.first}>
        {firstUser}
        <textarea
          className={s.textarea}
          onChange={ updateMessage }
          ref={textElement}
          value={props.dialogsPage.messagesData.newFirstUserMessage}
        ></textarea>
        <br />
        <button onClick={ clickButtom }>Отправить</button>
      </div>
      <div className={s.second}>{secondUser}</div>
    </div>
  );
};

export default Message;
