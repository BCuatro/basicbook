import * as CommentsApiUtil from '../util/comments_api_util';


export const RECEIVE_ALL_COMMENTS = `RECEIVE_ALL_COMMENTS`;
export const RECEIVE_COMMENT = `RECEIVE_COMMENT`;
export const RECEIVE_ERRORS= `RECEIVE_ERRORS`;
export const REMOVE_ERRORS =`REMOVE_ERRORS`;
export const REMOVE_COMMENT = `REMOVE_COMMENT`



//Action creators

const receiveComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId,
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

export const fetchComments = () => (dispatch)=> (
    CommentsApiUtil.fetchComments()
    .then(comments => (
        dispatch(receiveComments(comments))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const fetchComment =(commentId) => (dispatch) => (
   
    CommentsApiUtil.fetchComment(commentId)
    .then( comment => (
        dispatch(receiveComment(comment))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
  

export const createComment= comment => dispatch => (
    CommentsApiUtil.createComment(comment)
    .then(comment =>(
        dispatch(receiveComment(comment))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)


export const updateComment= comment => dispatch => (
    CommentsApiUtil.updateComment(comment)
    .then(comment =>(
        dispatch(receiveComment(comment))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const deleteComment= commentId => dispatch => (
    CommentsApiUtil.deleteComment(commentId)
    .then(()=> (
        dispatch(removeComment(commentId))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
