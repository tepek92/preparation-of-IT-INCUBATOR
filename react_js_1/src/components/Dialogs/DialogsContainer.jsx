import Dialogs from "./Dialogs";
import {
  addNewMessage,
  updateNewMessageText,
} from "../../redux/dialogsReducer";
import { connect } from 'react-redux';
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return ({
    dialogsData: state.dialogsPage.dialogsData, 
    messagesData: state.dialogsPage.messagesData,
    });
}

export default compose(connect(mapStateToProps, {addNewMessage, updateNewMessageText}), WithAuthNavigate)(Dialogs)
