import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { maxLength, require } from "../../helpers/validators/Validators";
import { login, logout } from "../../redux/authReducer";
import { getIsAuthorized } from "../../redux/authSelector";
import { FormInputCreator } from "../common/FormControler/FormControler";
import s from "./Login.module.css"

const LoginForm = (props) => {

  const maxLength20 = maxLength(20);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[require, maxLength20]} component={FormInputCreator} Element={"input"} name={"email"} placeholder={"email"} />
      </div>
      <div>
        <Field validate={[require, maxLength20]} component={FormInputCreator} Element={"input"} name={"password"} placeholder={"password"} type={"password"}/>
      </div>
      <div>
        <Field component={FormInputCreator} Element={"input"} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
      {props.error && <div className={s.error}>{props.error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, true, null);
    console.log(formData);
  };

  if (props.isAuthorized) return <Navigate to={"/profile"} />
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps, {login, logout})(Login);
