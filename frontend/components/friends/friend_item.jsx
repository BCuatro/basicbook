import React from 'react';




export default ({ friend, users, user, currentUser, friendcount}) => {
  let theFriend
  if (user?.id === friend?.user_id ){
    theFriend = users[friend?.friend_id]
    friendcount++
  } else if (user?.id === friend?.friend_id) {
    theFriend = users[friend?.user_id]
    friendcount++
  }
  
  
  if((user?.id === friend?.user_id || user?.id === friend?.friend_id) && friend?.friendship_status === "accepted"){
    return (
      <li className="friend-class">
        <a href={`/#/users/${theFriend?.id }`}>
        <div className= "friend-profile-container">
          <div className= "friend-profile-photo-container">
            <img  className= "friend-photo" src={theFriend?.profile_photoUrl ? theFriend?.profile_photoUrl : 
              "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" }  /> 
          </div >
          <div className= "friend-profile-name">{theFriend?.username}</div>
        </div>
        </a>
      
        {/* <div className="friend-name">{theFriend?.username}</div> */}
        {/* <div className="friend-profile">{theFriend?.profile_photo}</div> */}
        
      </li>
    )}
}

  