import { RECEIVE_PROFILE} from "../actions/users_actions";


const ProfileReducer =  (state ={}, action)=> {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PROFILE:
            nextState[action.profile_id] = action.profile_id
            return nextState
        default:
            return state
            
    }

}

export default ProfileReducer;