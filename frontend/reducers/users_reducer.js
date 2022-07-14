import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER, RECEIVE_PROFILE} from "../actions/users_actions";


const UsersReducer =  (state ={}, action)=> {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState
        case RECEIVE_ALL_USERS:
            nextState = action.users
            return nextState
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_PROFILE:
            nextState[action.profile_id] = action.profile_id
            return nextState
        default:
            return state
            
    }

}

export default UsersReducer;