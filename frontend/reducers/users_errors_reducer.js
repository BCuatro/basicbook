
import { RECEIVE_EDIT_ERRORS, REMOVE_EDIT_ERRORS } from "../actions/users_actions";

REMOVE_EDIT_ERRORS
const UsersErrorReducer = (state=[], action) =>{
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_EDIT_ERRORS:
            return action.editErrors
        
        
        case REMOVE_EDIT_ERRORS:
            return []
            
    
        default:
            return state
    }
}




export default UsersErrorReducer;