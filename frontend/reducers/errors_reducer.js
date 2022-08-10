import { combineReducers } from "redux";
import loginErrorReducer from "./login_errors_reducer";
import postsErrorReducer from "./posts_errors_reducer";
import commentsErrorReducer from "./comments_errors_reducer";
import signUpErrorsReducer from "./signup_errors_reducer";
import UsersErrorReducer from "./users_errors_reducer";


const ErrorsReducer = combineReducers({
  signupErrorSession: signUpErrorsReducer,
  loginErrorSession: loginErrorReducer,
  posts: postsErrorReducer,
  comments: commentsErrorReducer,
  usersErrors: UsersErrorReducer
});

export default ErrorsReducer;

