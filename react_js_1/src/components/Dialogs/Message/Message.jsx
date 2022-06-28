import s from "./Message.module.css";
import Firstuser from "./Firstuser/Firstuser";
import Seconduser from "./Seconduser/Seconduser";
import React from "react";

const Message = (props) => {
  let firstUser = props.messagesData.firstUser.map((message) => (
    <Firstuser message={message.message} />
  ));
  let secondUser = props.messagesData.secondUser.map((message) => (
    <Seconduser message={message.message} />
  ));

  let textElement = React.createRef();
  const clickButtom = () => alert(textElement.current.value);

  return (
    <div className={s.message}>
      <div className={s.first}>
        {firstUser}
        <textarea ref={ textElement } className={s.textarea}></textarea><br/>
        <button onClick={ clickButtom }>Отправить</button>
      </div>
      <div className={s.second}>{secondUser}</div>
    </div>
  );
};

export default Message;
