import * as FriendsApiUtil from '../util/friends_api_util';


export const RECEIVE_ALL_FRIENDS = `RECEIVE_ALL_FRIENDS`;
// export const RECEIVE_FRIEND = `RECEIVE_FRIEND`;
export const RECEIVE_ERRORS= `RECEIVE_ERRORS`;
export const REMOVE_ERRORS =`REMOVE_ERRORS`;
export const REMOVE_POST = `REMOVE_POST`



//Action creators

const receiveFriends = friends => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friends
    }
}

// const receiveFriend = friend => {
//     return {
//         type: RECEIVE_FRIEND,
//         post
//     }
// }

// const removePost = postId => {
//     return {
//         type: REMOVE_POST,
//         postId,
//     }
// }

// const receiveErrors = errors =>{
//     return{
//         type: RECEIVE_ERRORS,
//         errors
//     }
    
// }

// export const removeErrors = errors =>{
//     return{
//         type: REMOVE_ERRORS,
//         errors
//     }
    
// }



//thunk Method

export const fetchFriends = () => (dispatch)=> (
    FriendsApiUtil.fetchFriends()
    .then(friends => (
        dispatch(receiveFriends(friends))
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
  

export const createPost= formData => dispatch => (
    PostsApiUtil.createPost(formData)
    .then(post =>(
        dispatch(receivePost(post))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)


export const updatePost= (id, formData)=> dispatch => (
    PostsApiUtil.updatePost(id, formData)
    .then(post =>(
        dispatch(receivePost(post))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const deletePost= postId => dispatch => (
    PostsApiUtil.deletePost(postId)
    .then(()=> (
        dispatch(removePost(postId))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
