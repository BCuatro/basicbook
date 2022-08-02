import * as LikesApiUtil from '../util/likes_api_util';


export const RECEIVE_ALL_LIKES = `RECEIVE_ALL_LIKES`;
export const RECEIVE_LIKE = `RECEIVE_LIKE`;
export const RECEIVE_ERRORS= `RECEIVE_ERRORS`;
export const REMOVE_ERRORS =`REMOVE_ERRORS`;
export const REMOVE_LIKE = `REMOVE_LIKE`



//Action creators

const receiveLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId,
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

export const fetchLikes = () => (dispatch)=> (
    LikesApiUtil.fetchLikes()
    .then(likes => (
        dispatch(receiveLikes(likes))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const fetchLike =(likeId) => (dispatch) => (
   
    LikesApiUtil.fetchLike(likeId)
    .then( like => (
        dispatch(receiveLike(like))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
  

export const createLike= like => dispatch => (
    LikesApiUtil.createLike(like)
    .then(like =>(
        dispatch(receiveLike(like))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)


export const deleteLike= likeId => dispatch => (
    LikesApiUtil.deleteLike(likeId)
    .then(()=> (
        dispatch(removeLike(likeId))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
