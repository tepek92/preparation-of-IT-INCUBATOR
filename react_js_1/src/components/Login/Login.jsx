import React from "react";
import { reduxForm, Field } from "redux-form";
import { maxLength, require } from "../../helpers/validators/Validators";
import { FormInputCreator } from "../common/FormControler/FormControler";
const LoginForm = (props) => {
  
  const maxLength10 = maxLength(10);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[require, maxLength10]} component={FormInputCreator} Element={"input"} name={"login"} placeholder={"login"} />
      </div>
      <div>
        <Field validate={[require, maxLength10]} component={FormInputCreator} Element={"input"} name={"password"} placeholder={"password"} />
      </div>
      <div>
        <Field validate={[require, maxLength10]} component={FormInputCreator} Element={"input"} name={"checkbox"} type={"checkbox"} />
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;
