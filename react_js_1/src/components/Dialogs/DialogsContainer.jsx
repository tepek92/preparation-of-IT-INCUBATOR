import React from 'react';
import Dialogs from "./Dialogs";
import {
  addNewMessageFirstUserActionCreator,
  updateNewMessageTextFirstUserActionCreator,
} from "../../redux/dialogsReducer";
// import StoreContext from "../../StoreContext";
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const onAddNewMessage = () =>
//           store.dispatch(addNewMessageFirstUserActionCreator());
//         const onUpdateNewMessageText = (newMessage) => {
//           store.dispatch(
//             updateNewMessageTextFirstUserActionCreator(newMessage)
//           );
//         };

//         return (
//           <Dialogs
//             addNewMessage={onAddNewMessage}
//             updateNewMessageText={onUpdateNewMessageText}
//             dialogsData={store.getState().dialogsPage.dialogsData}
//             messagesData={store.getState().dialogsPage.messagesData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return ({
    dialogsData: state.dialogsPage.dialogsData, 
    messagesData: state.dialogsPage.messagesData
    });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addNewMessage: () => dispatch(addNewMessageFirstUserActionCreator()),
    updateNewMessageText: (newMessage) => dispatch(
      updateNewMessageTextFirstUserActionCreator(newMessage)
    )
  })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
