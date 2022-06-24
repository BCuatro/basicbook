import { REMOVE_LOGIN_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERRORS } from "../actions/session_actions";

const loginErrorReducer = (state=[], action) =>{
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_LOGIN_ERRORS:
            return action.loginErrors    
        
        case RECEIVE_CURRENT_USER:
            return []
        
        case REMOVE_LOGIN_ERRORS:
            return []
        
        default:
            return state
    }
}




export default loginErrorReducer;

