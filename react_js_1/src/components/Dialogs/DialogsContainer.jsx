import s from "./Dialogs.module.css";
import Dialogs from "./Dialogs";
import {
  addNewMessageFirstUserActionCreator,
  updateNewMessageTextFirstUserActionCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  const onAddNewMessage = () =>
    props.store.dispatch(addNewMessageFirstUserActionCreator());
  const onUpdateNewMessageText = (newMessage) => {
    props.store.dispatch(
      updateNewMessageTextFirstUserActionCreator(newMessage)
    );
  };
  return (
    <div>
      <Dialogs
        addNewMessage={onAddNewMessage}
        updateNewMessageText={onUpdateNewMessageText}
        dialogsData={props.store.getState().dialogsPage.dialogsData}
        messagesData={props.store.getState().dialogsPage.messagesData}
      />
    </div>
  );
};

export default DialogsContainer;
