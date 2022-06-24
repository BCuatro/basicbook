import { RECEIVE_SIGNUP_ERRORS, RECEIVE_CURRENT_USER, REMOVE_SIGNUP_ERRORS,  } from "../actions/session_actions";

const SignupErrorReducer = (state=[], action) =>{
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SIGNUP_ERRORS:
            return action.signupErrors
        
        case RECEIVE_CURRENT_USER:
            return []
        
        case REMOVE_SIGNUP_ERRORS:
            return []
            
    
        default:
            return state
    }
}




export default SignupErrorReducer;