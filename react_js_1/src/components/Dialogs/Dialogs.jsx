import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {

  if (!props.isAuthorized) return <Navigate to={"/login"} />;

  let dialogElement = props.dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.itemsDialog}>{dialogElement}</div>
      <div className={s.itemsMessages}>
        <Message
          addNewMessage={props.addNewMessage}
          updateNewMessageText={props.updateNewMessageText}
          messagesData={props.messagesData}
        />
      </div>
    </div>
  );
};

// class Dialogs extends React.Component {
//   render() {
//     let dialogElement = this.props.dialogsData.map((dialog) => (
//       <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
//     ));
//     return (
//       <div className={s.dialogs}>
//         <div className={s.itemsDialog}>{dialogElement}</div>
//         <div className={s.itemsMessages}>
//           <Message
//             addNewMessage={this.props.addNewMessage}
//             updateNewMessageText={this.props.updateNewMessageText}
//             messagesData={this.props.messagesData}
//           />
//         </div>
//       </div>
//     );
//   }
// }


export default Dialogs;
