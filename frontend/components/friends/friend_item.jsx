import React from 'react';




export default ({ friend, users, user, currentUser}) => {
  let theFriend
  if (user?.id === friend?.user_id ){
    theFriend = users[friend?.friend_id]
  } else if (user?.id === friend?.friend_id) {
    theFriend = users[friend?.user_id]
  }
  
  console.log("this is from friend item", theFriend)
  if(user?.id === friend?.user_id || user?.id === friend?.friend_id) {
    return (
      <li className="friend-class">
        <h4>Friend's List</h4>
      <a href={`/#/users/${theFriend?.id }`}>{theFriend?.username}</a>
        {/* <div className="friend-name">{theFriend?.username}</div> */}
        {/* <div className="friend-profile">{theFriend?.profile_photo}</div> */}
        
      </li>
    )}
}

  