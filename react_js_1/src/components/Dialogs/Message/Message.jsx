import React from "react";
import s from "./Message.module.css";

import Firstuser from "./Firstuser/Firstuser";
import Seconduser from "./Seconduser/Seconduser";
import { Field, reduxForm } from "redux-form";

const Message = (props) => {
  let firstUser = props.messagesData.firstUser.map((message) => (
    <Firstuser message={message.message} />
  ));
  let secondUser = props.messagesData.secondUser.map((message) => (
    <Seconduser message={message.message} />
  ));

  const onSubmit = (formData) => {
    console.log(formData);
    props.addNewMessage(formData.message);
  };


  return (
    <div className={s.message}>
      <div className={s.first}>
        {firstUser}
        <MessagesReduxForm onSubmit={onSubmit}/>
      </div>
      <div className={s.second}>{secondUser}</div>
    </div>
  );
};

const MessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"message"}
        className={s.textarea}
      />
      <button >Отправить</button> 

    </form>
  );
};

const MessagesReduxForm = reduxForm({
  form: "message",
})(MessageForm);


export default Message;
