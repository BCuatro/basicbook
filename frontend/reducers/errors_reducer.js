import { combineReducers } from "redux";
import loginErrorReducer from "./login_errors_reducer";
import signUpErrorsReducer from "./signup_errors_reducer";

const ErrorsReducer = combineReducers({
  signupErrorSession: signUpErrorsReducer,
  loginErrorSession: loginErrorReducer
});

export default ErrorsReducer;

