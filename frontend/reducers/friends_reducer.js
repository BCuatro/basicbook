import { RECEIVE_ALL_FRIENDS, } from "../actions/friends_actions";





const FriendsReducer =(state = {}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            return action.friends
            
        // case RECEIVE_POST:
        //     return Object.assign({}, state, {[action.post.id]: action.post})

        // case REMOVE_POST:
        //     delete nextState[action.postId]
        //     return nextState
            
        default:
            return state
    }
}

export default FriendsReducer
