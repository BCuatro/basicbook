import * as FriendsApiUtil from '../util/friends_api_util';


export const RECEIVE_ALL_FRIENDS = `RECEIVE_ALL_FRIENDS`;
export const ADD_FRIEND = `ADD_FRIEND`;
export const RECEIVE_FRIEND= `RECEIVE_FRIEND`;
export const DELETE_FRIEND = `DELETE_FRIEND`

export const RECEIVE_ERRORS= `RECEIVE_ERRORS`;
export const REMOVE_ERRORS =`REMOVE_ERRORS`;



//Action creators

const receiveFriends = friends => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friends
    }
}

const receiveFriend = friend => {
    return {
        type: RECEIVE_FRIEND,
        friend
    }
}

const addFriend = friend => {
    return {
        type: ADD_FRIEND,
        friend
    }
}

const deleteFriend = friendId => {
    return {
        type: DELETE_FRIEND,
        friendId,
    }
}

const receiveErrors = errors =>{
    return{
        type: RECEIVE_ERRORS,
        errors
    }
    
}

export const removeErrors = errors =>{
    return{
        type: REMOVE_ERRORS,
        errors
    }
    
}



//thunk Method

export const fetchFriends = () => (dispatch)=> (
    FriendsApiUtil.fetchFriends()
    .then(friends => (
        dispatch(receiveFriends(friends))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const fetchFriend = () => (dispatch)=> (
    FriendsApiUtil.fetchFriend()
    .then(friend => (
        dispatch(receiveFriend(friend))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

// export const fetchPost =(postId) => (dispatch) => (
   
//     PostsApiUtil.fetchPost(postId)
//     .then( post => (
//         dispatch(receivePost(post))
//         ), errors => (dispatch(receiveErrors(errors.responseJSON))
//         )
//     )

// )
  

export const createFriendship= formData => dispatch => (
    FriendsApiUtil.addFriend(formData)
    .then(friend =>(
        dispatch(addFriend(friend))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)


export const updateFriendship= (id, formData)=> dispatch => (
    PostsApiUtil.updatePost(id, formData)
    .then(friend =>(
        dispatch(receivePost(friend))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const deleteFriendship= friendId => dispatch => (
    FriendsApiUtil.deleteFriend(friendId)
    .then(()=> (
        dispatch(deleteFriend(friendId))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
