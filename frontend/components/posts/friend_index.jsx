import React from 'react';
import FriendItem from '../friends/friend_item';


const FriendIndex= ({currentUser, user, users, friends, classname}) =>{
  return(

  
    <div className= {classname} >
    <h5 className="friends-list-title">Friends</h5>
        <ul className= "friends-list">
                {
                    friends
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
