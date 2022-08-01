export const fetchFriends = () => {
    return $.ajax({
            url: `/api/friends`,
            method: `GET`
        })
    
}

export const createFriend = (formData) => {
    return $.ajax({
            url: `api/friends`,
            method: `POST`,
            processData: false,
            contentType: false,
            cache: false,
            data: formData
        })
    
}

export const updateFriend = (id, formData) => {
    return $.ajax({
            url: `api/friends/${id}`,
            method: `PATCH`,
            processData: false,
            contentType: false,
            cache: false,
            data: formData
        })
    
}

export const deleteFriend = (friendId) => {
    return $.ajax({
            url: `api/friends/${friendId}`,
            method: `DELETE`,
        })
    
}

