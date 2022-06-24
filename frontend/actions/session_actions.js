import * as SessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SIGNUP_ERRORS= "RECEIVE_SIGNUP_ERROR";
export const RECEIVE_LOGIN_ERRORS= "RECEIVE_LOGIN_ERRORS";
export const REMOVE_LOGIN_ERRORS ="REMOVE_LOGIN_ERRORS";
export const REMOVE_SIGNUP_ERRORS ="REMOVE_SIGNUP_ERRORS";


//action creators
//receiveCurrentUser(currentUser)

const receiveCurrentUser = currentUser => {
    return{
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
    
}
//logoutCurrentUser()

const logoutCurrentUser = () => {
    return{
        type: LOGOUT_CURRENT_USER
    }
}
//receiveErrors(errors)

const receieveSignupErrors = signupErrors =>{
    return{
        type: RECEIVE_SIGNUP_ERRORS,
        signupErrors
    }
    
}

const receiveLoginErrors = loginErrors =>{
    return{
        type: RECEIVE_LOGIN_ERRORS,
        loginErrors
    }
    
}
export const removeSignupErrors = () => {
    return{
        type:REMOVE_SIGNUP_ERRORS
    }
}
export const removeLoginErrors = () => {
    return{
        type:REMOVE_LOGIN_ERRORS
    }
}
        



//thunk creators

// login(user)

export const login = user => dispatch => (
    SessionApiUtil.login(user)
    .then(user => ( 
        dispatch(receiveCurrentUser(user))
        ), loginErr => (dispatch(receiveLoginErrors(loginErr.responseJSON))
        )
    )
)
    

// logout()
export const logout =() => dispatch =>{
    return SessionApiUtil.logout()
    .then(user=> dispatch(logoutCurrentUser()))
    
}
// signup_container(user)

export const signup = user => dispatch =>(
     SessionApiUtil.signup(user)
    .then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
        ), signupErr => (dispatch(receieveSignupErrors(signupErr.responseJSON))
        )
    )
)