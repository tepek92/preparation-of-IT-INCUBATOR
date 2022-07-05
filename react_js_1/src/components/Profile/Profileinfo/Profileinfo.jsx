import React from "react";
import presswall from "../../../img/presswall.jpg";
import avatar from "../../../img/avatar.jpg";
import s from "./Profileinfo.module.css";

class Profileinfo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img className={s.presswall} src={presswall} alt="presswall" />
        </div>
        <div>
          <img className={s.avatar} src={avatar} alt="avatar" /> + description
        </div>
      </div>
    );
  }
}

// const Profileinfo = () => {
//   return (
//     <div>
//       <div>
//         <img className={s.presswall} src={presswall} alt="presswall" />
//       </div>
//       <div>
//         <img className={s.avatar} src={avatar} alt="avatar" /> + description
//       </div>
//     </div>
//   );
// };

export default Profileinfo;
