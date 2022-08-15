import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createFriendship, deleteFriendship } from '../../actions/friends_actions';

const Friends = ({user}) =>{

    const [friendState, setFriendState]= useState({user_id: "", friend_id: "", friendship_status: ""})
    const friendId = parseInt(useParams().userId)

const createFriendRequest = (friendData) => dispatch(createFriendship(friendData)) 

// const handleState = () =>{
//     // setFriendState({ 
//     //     user_id: user.id,
//     //     friend_id: friendId,
//     //     friendship_status: "accepted"
        
//     // })
//     setFriendState({user_id: user.id})
    
// }

const handleChange=() =>{
    setFriendState({user_id: user.id, friend_id: friendId, friendship_status: "accepted"})
   
}
const handleSubmit = () => {
   
        
        createFriendRequest(friendState)
        
    }

    
    return (
        <form onSubmit={() => {handleSubmit()}}>
        <button 
            type='submit'
            id = "edit-button" 
            onClick={() => {handleChange()}}>
                <i className="fa fa-solid fa-user"></i> Add Friend 
        </button>
        </form>

    )
}
export default Friends