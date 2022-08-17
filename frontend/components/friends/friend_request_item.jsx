import React from 'react';
import FriendRequestContainer from './friend_request_container';





export default ({ friend, users, user, currentUser, handleCount}) => {
  const requestee = users[friend?.friend_id]
  const requester=  users[friend?.user_id]
  
  if(currentUser?.id === requestee?.id && friend?.friendship_status === "pending") {
    
    return (
      <li className= "notification-dropdown-items" >
          <a href={`/#/users/${requester?.id }`}>
        <div className= "info-container">
            <img className = "notification-photo"  src={requester?.profile_photoUrl ? requester?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } alt="" />

            <div className="notification-info">
                <div className= "notification-name"></div>{requester?.first_name} {requester?.last_name}
                <div className= "notification-username">{requester?.username}</div>
            </div>
        </div>
          </a>
        <FriendRequestContainer friend = {friend} />
      </li>
    )}
}

  