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

export const createPost = (formData) => {
    return $.ajax({
            url: `api/posts`,
            method: `POST`,
            processData: false,
            contentType: false,
            cache: false,
            data: formData
        })
    
}

export const updatePost = (id, formData) => {
    return $.ajax({
            url: `api/posts/${id}`,
            method: `PATCH`,
            processData: false,
            contentType: false,
            cache: false,
            data: formData
        })
    
}

export const deletePost = (postId) => {
    return $.ajax({
            url: `api/posts/${postId}`,
            method: `DELETE`,
        })
    
}