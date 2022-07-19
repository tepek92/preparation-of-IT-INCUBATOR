import React from "react";
import s from "./Message.module.css";

import Firstuser from "./Firstuser/Firstuser";
import Seconduser from "./Seconduser/Seconduser";
import { Field, reduxForm } from "redux-form";
import { FormInputCreator } from "../../common/FormControler/FormControler";
import { maxLength, require } from "../../../helpers/validators/Validators";

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

  const maxLength50 = maxLength(50);
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textarea}>
        <Field validate={[require, maxLength50]} component={FormInputCreator} name="message" Element={"textarea"}/>
        </div>
      <button >Отправить</button> 

    </form>
  );
};

const MessagesReduxForm = reduxForm({
  form: "message",
})(MessageForm);


export default Message;
