import { RECEIVE_ERRORS, RECEIVE_COMMENT, REMOVE_ERRORS } from "../actions/comments_actions";


const commentsErrorReducer = (state=[], action) =>{
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors
        
        case RECEIVE_COMMENT:
            return []
        
        case REMOVE_ERRORS:
            return []
            
    
        default:
            return state
    }
}



export default commentsErrorReducer;