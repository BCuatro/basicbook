import { RECEIVE_ERRORS, RECEIVE_POST, REMOVE_ERRORS } from "../actions/posts_actions";


const postsErrorReducer = (state=[], action) =>{
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors
        
        case RECEIVE_POST:
            return []
        
        case REMOVE_ERRORS:
            return []
            
    
        default:
            return state
    }
}







export default postsErrorReducer;