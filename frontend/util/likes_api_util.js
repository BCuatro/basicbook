export const fetchLikes = () => {
    return $.ajax({
            url: `/api/likes`,
            method: `GET`
        })
    
}


export const createLike = (formData) => {
    return $.ajax({
            url: `api/likes`,
            method: `POST`,
            processData: false,
            contentType: false,
            cache: false,
            data: formData
        })
    
}



export const deleteLike = (likeId) => {
    return $.ajax({
            url: `api/likes/${likeId}`,
            method: `DELETE`,
        })
    
}