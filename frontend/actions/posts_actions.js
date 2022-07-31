import * as PostsApiUtil from '../util/posts_api_util';


export const RECEIVE_ALL_POSTS = `RECEIVE_ALL_POSTS`;
export const RECEIVE_POST = `RECEIVE_POST`;
export const RECEIVE_ERRORS= `RECEIVE_ERRORS`;
export const REMOVE_ERRORS =`REMOVE_ERRORS`;
export const REMOVE_POST = `REMOVE_POST`



//Action creators

const receivePosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId,
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

export const fetchPosts = () => (dispatch)=> (
    PostsApiUtil.fetchPosts()
    .then(posts => (
        dispatch(receivePosts(posts))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)

export const fetchPost =(postId) => (dispatch) => (
   
    PostsApiUtil.fetchPost(postId)
    .then( post => (
        dispatch(receivePost(post))
        ), errors => (dispatch(receiveErrors(errors.responseJSON))
        )
    )

)
  

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
