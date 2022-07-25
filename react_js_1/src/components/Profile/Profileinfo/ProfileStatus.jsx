import React, { useEffect } from "react";
import { useState } from "react";
// import s from "./Profileinfo.module.css";

const ProfileStatus = (props) => {

  // С помощью хука useState создаю "локальный стейт"
  // с переменными и функциями меняющими эти переменные"
  let [editMode, setEditMode] = useState(false);
  let [userStatus, setUserStatus] = useState(props.userStatus);

  // С помощью хука useEffect, создаю зависимость.
  // При изменении приходящего в пропсах значения props.userStatus
  // Меняем значение userStatus в "локальном стейте"
  useEffect(() => setUserStatus(props.userStatus), [props.userStatus]);

  // Функция вызывается при нажатии на <span> статус.
  // Или смне фокуса c <input>, в котором мы меняем статус.
  // В зависимомти от состояния editMode
  const changeMode = (e) => {
    if (editMode) {
      setEditMode(false); // могу ли я эту функцию использовать в условиях и циклах??
      props.updateUserStatus(e.target.value);
    } else {
      setEditMode(true); // могу ли я эту функцию использовать в условиях и циклах??
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
