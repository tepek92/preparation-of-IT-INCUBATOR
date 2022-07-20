import React from "react";
import s from "./FormControler.module.css"

export const FormInputCreator = ({ Element, meta, input, ...props }) => {
  return (
    <div>
      <div>
        <Element className={meta.error && meta.touched && s.element}{...input} {...props} />
      </div>
      <div>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    </div>
  );
};
