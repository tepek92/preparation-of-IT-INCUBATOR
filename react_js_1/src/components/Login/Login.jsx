import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder={"login"} />
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder={"password"} />
      </div>
      <div>
        <Field component={"input"} name={"checkbox"} type={"checkbox"} />
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
