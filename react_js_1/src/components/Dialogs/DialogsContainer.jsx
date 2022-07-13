import Dialogs from "./Dialogs";
import {
  addNewMessage,
  updateNewMessageText,
} from "../../redux/dialogsReducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    dialogsData: state.dialogsPage.dialogsData, 
    messagesData: state.dialogsPage.messagesData,
    isAuthorized: state.auth.isAuthorized
    });
}

const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;
