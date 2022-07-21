import Dialogs from "./Dialogs";
import {
  addNewMessage,
} from "../../redux/dialogsReducer";
import { connect } from 'react-redux';
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import { getDialogsData, getMessagesData } from "../../redux/dialogsSelector";

const mapStateToProps = (state) => {
  return ({
    dialogsData: getDialogsData(state), 
    messagesData: getMessagesData(state),
    });
}

export default compose(connect(mapStateToProps, { addNewMessage }), WithAuthNavigate)(Dialogs)
