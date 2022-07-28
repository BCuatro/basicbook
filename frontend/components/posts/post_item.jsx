import React from 'react';



export default ({ post, user}) => {
  
    if (user?.id === parseInt(post?.profile_id)) {

    return (
      <li className="post_class">
        <div className="wallPostHeader">Posted by {user?.username}</div>
        
        <div className="wallPostBody">{post?.body}</div>
        {/* <div className="wallPostButton">
          <button> like</button>
          <button> edit</button>
        </div> */}
      </li>
    )}
    }
  