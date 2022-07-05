import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

class Dialog extends React.Component {
  render() {
    return (
      <div className={s.dialog}>
        <NavLink
          to={"/dialogs/" + this.props.id}
          className={(a) => (a.isActive ? s.active : "")}
        >
          <img src={this.props.avatar} alt="" />
          {this.props.name}
        </NavLink>
      </div>
    );
  }
}

// const Dialog = (props) => {
//   return (
//       <div className={s.dialog}>
//         <NavLink to={"/dialogs/" + props.id} className={(a) => a.isActive ? s.active : ""}>
//           <img src={props.avatar} alt=""/>
//           {props.name}
//           </NavLink>
//       </div>
//   );
// };

export default Dialog;
