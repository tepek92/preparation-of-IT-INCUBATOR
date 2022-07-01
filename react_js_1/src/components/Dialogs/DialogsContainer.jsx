import Dialogs from "./Dialogs";
import {
  addNewMessageFirstUserActionCreator,
  updateNewMessageTextFirstUserActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const onAddNewMessage = () =>
          store.dispatch(addNewMessageFirstUserActionCreator());
        const onUpdateNewMessageText = (newMessage) => {
          store.dispatch(
            updateNewMessageTextFirstUserActionCreator(newMessage)
          );
        };

        return (
          <Dialogs
            addNewMessage={onAddNewMessage}
            updateNewMessageText={onUpdateNewMessageText}
            dialogsData={store.getState().dialogsPage.dialogsData}
            messagesData={store.getState().dialogsPage.messagesData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
