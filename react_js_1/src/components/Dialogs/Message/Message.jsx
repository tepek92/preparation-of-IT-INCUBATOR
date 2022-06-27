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

  return (
    <div className={s.message}>
      <div className={s.first}>{firstUser}</div>
      <div className={s.second}>{secondUser}</div>
    </div>
  );
};

export default Message;
