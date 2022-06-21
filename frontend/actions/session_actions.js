import * as SessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS= "RECEIVE_SESSION_ERROR"


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

const receieveErrors = errors =>{
    return{
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
    
}



//thunk creators

// login(user)

export const login = user => dispatch => (
    SessionApiUtil.login(user)
    .then(user => ( 
        dispatch(receiveCurrentUser(user))
        ), err => (dispatch(receieveErrors(err.responseJSON))
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
        ), err => (dispatch(receieveErrors(err.responseJSON))
        )
    )
)