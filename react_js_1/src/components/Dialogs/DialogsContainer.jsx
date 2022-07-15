import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessage,
  updateNewMessageText,
} from "../../redux/dialogsReducer";
import { connect } from 'react-redux';
import WithAuthNavigate from "../../hoc/WithAuthNavigate";

const mapStateToProps = (state) => {
  return ({
    dialogsData: state.dialogsPage.dialogsData, 
    messagesData: state.dialogsPage.messagesData,
    });
}

let AuthNavigateComponent = WithAuthNavigate(Dialogs);

const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessageText})(AuthNavigateComponent);

export default DialogsContainer;
