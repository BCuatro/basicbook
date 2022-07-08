export const fetchPosts = () => {
    return $.ajax({
            url: `/api/posts`,
            method: `GET`
        })
    
}

export const fetchPost = (postId) => {
    return $.ajax({
            url: `/api/posts/${postId}`,
            method: `GET`
        })
    
}

export const createPost = (post) => {
    // debugger
    return $.ajax({
            url: `api/posts`,
            method: `POST`,
            data: {post}
        })
    
}

export const updatePost = (post) => {
    return $.ajax({
            url: `api/posts/${post.id}`,
            method: `PATCH`,
            data: {user}
        })
    
}

export const deletePost = (post_Id) => {
    return $.ajax({
            url: `api/posts/${post_Id}`,
            method: `DELETE`,
            data: {post}
        })
    
}