import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = `RECEIVE_ALL_USERS`;
export const RECEIVE_USER = `RECEIVE_USER`;
export const RECEIVE_PROFILE = `RECEIVE_PROFILE`


//Action creators

const receiveUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveProfile = user => {
    return {
        type: RECEIVE_PROFILE,
        user
    }
}

//thunk Method

export const fetchUsers = () => (dispatch)=> {
    return UsersApiUtil.fetchUsers()
    .then(users => {
        return dispatch(receiveUsers(users))
    })
}

export const fetchUser =(userId) => (dispatch) => {
   
    return UsersApiUtil.fetchUser(userId)
    .then( user => {
        
        return dispatch(receiveUser(user))
    })
}

export const fetchProfile =(userId) => (dispatch) => {
   
    return UsersApiUtil.fetchUser(userId)
    .then( user => {
        
        return dispatch(receiveUser(user))
    })
}


// export const updateUser= (user) => dispatch => {
//     return UsersApiUtil.updateUser(user)
//     .then(user =>{
//         return dispatch(receiveUser(user))
//     })

// }

export const updateUser= (id, formData) => dispatch => {
    return UsersApiUtil.updateUser(id, formData)
    .then(user =>(
         dispatch(receiveUser(user))
    ))

}


