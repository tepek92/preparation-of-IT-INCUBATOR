import React from "react";
import s from "./Firstuser.module.css";

class Firstuser extends React.Component {
  render() {
    return (
      <div className={s.user}>
        <div className={s.text}>{this.props.message}</div>
      </div>
    );
  }
}

// const Firstuser = (props) => {
//   return (
//     <div className={s.user}>
//       <div className={s.text}>{props.message}</div>
//     </div>
//   );
// };

export default Firstuser;
