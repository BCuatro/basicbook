import React from 'react';
import FriendRequestContainer from './friend_request_container';





export default ({ friend, users, user, currentUser}) => {
  const requestee = users[friend?.friend_id]
  const requester=  users[friend?.user_id]
  
  
  
  if(currentUser?.id === requestee?.id && friend?.friendship_status === "pending" && currentUser?.id === user?.id) {
    return (
      <li className="friend-request-class">
        <h4>Friend's Request</h4>
      <a href={`/#/users/${requester?.id }`}>{requester?.username}</a>
        {/* <div className="friend-name">{theFriend?.username}</div> */}
        {/* <div className="friend-profile">{theFriend?.profile_photo}</div> */}
        <FriendRequestContainer friend = {friend} />
      </li>
    )}
}

  