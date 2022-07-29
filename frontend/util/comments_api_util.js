export const fetchComments = () => {
    return $.ajax({
            url: `/api/comments`,
            method: `GET`
        })
    
}

export const fetchComment = (commentId) => {
    return $.ajax({
            url: `/api/comments/${commentId}`,
            method: `GET`
        })
    
}

export const createComment = (comment) => {
    return $.ajax({
            url: `api/comments`,
            method: `POST`,
            data: {comment}
        })
    
}

export const updateComment = (comment) => {
    return $.ajax({
            url: `api/comments/${comment.id}`,
            method: `PATCH`,
            data: {comment}
        })
    
}

export const deleteComment = (comment_Id) => {
    return $.ajax({
            url: `api/comments/${comment_Id}`,
            method: `DELETE`,
            data: {comment}
        })
    
}