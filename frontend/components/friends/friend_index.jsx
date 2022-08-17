import React from 'react';
import FriendItem from './friend_item';


const FriendIndex= ({currentUser, user, users, friends, classname}) =>{
    const myFriends = friends.filter(friend => (user?.id === friend?.user_id || user?.id === friend?.friend_id) && friend?.friendship_status === "accepted")
    const friendWord = myFriends.length ===1 ? "Friend" : "Friends"
  return(

  
    <div className= {classname} >
    <div className= "friends-header">
        <div className="friends-list-title">Friends</div>
        <div className = "friends-count"> {myFriends.length} {friendWord}</div>
    </div>
        <ul className= "friends-list">
                {
                    myFriends
                    .sort((a,b) => a.username > b.username ? 1 : -1)
                    .map((friend, ind) => (
                        <FriendItem
                            key={`fi-${ind}`}
                            friend={friend}
                            user= {user}
                            currentUser= {currentUser}
                            users= {(users)}
                            
                        />
                    ))
                }
        </ul>
  </div>
  )
}

export default FriendIndex
