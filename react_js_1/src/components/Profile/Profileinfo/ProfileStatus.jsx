import React, { useEffect } from "react";
import { useState } from "react";
// import s from "./Profileinfo.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [userStatus, setUserStatus] = useState(props.userStatus);

  useEffect(() => setUserStatus(props.userStatus), [props.userStatus]);

  const changeMode = (e) => {
    if (editMode) {
      setEditMode(false);
      props.updateUserStatus(e.target.value);
    } else {
      setEditMode(true);
    }
  };

  const changeStatus = (e) => {
    setUserStatus(e.target.value);
  };

  return (
    <div>
      {editMode && (
        <input
          onChange={changeStatus}
          autoFocus
          onBlur={changeMode}
          value={userStatus}
        />
      )}
      {!editMode && (
        <span onDoubleClick={changeMode}>
          {userStatus || "Добавить статус"}
        </span>
      )}
    </div>
  );
};

export default ProfileStatus;
