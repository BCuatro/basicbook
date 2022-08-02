import { ADD_FRIEND, DELETE_FRIEND, RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, } from "../actions/friends_actions";




const FriendsReducer =(state = {}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            return action.friends

        case RECEIVE_FRIEND:
            return nextState[action.friend.id] = action.friend
            
        case ADD_FRIEND:
            return Object.assign({}, state, {[action.friend.id]: action.friend})

        case DELETE_FRIEND:
            delete nextState[action.friendId]
            return nextState
            
        default:
            return state
    }
}

export default FriendsReducer
