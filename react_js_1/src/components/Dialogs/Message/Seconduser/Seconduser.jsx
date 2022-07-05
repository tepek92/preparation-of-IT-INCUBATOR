import React from "react";
import s from "./Seconduser.module.css";

class Seconduser extends React.Component {
  render() {
    return (
      <div className={s.user}>
        <div className={s.text}>{this.props.message}</div>
      </div>
    );
  }
}

// const Seconduser = (props) => {
//   return (
//     <div className={s.user}>
//       <div className={s.text}>{props.message}</div>
//     </div>
//   );
// };

export default Seconduser;
