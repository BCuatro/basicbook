import React from 'react';



export default ({ post, user}) => {
  
    if (user.id === parseInt(post.profile_id)) {

    return (
      <li>
        <h3>Posted by {user.username}</h3>
        
        <h3>{post.body}</h3>

        <button> like</button>
        <button> edit</button>
      </li>
    )}
    }
  