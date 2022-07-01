import React from 'react';
import s from "./Firstuser.module.css";

const Firstuser = (props) => {
  return (
    <div className={s.user}>
      <div className={s.text}>{props.message}</div>
    </div>
  );
};

export default Firstuser;
