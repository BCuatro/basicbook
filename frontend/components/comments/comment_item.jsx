import React from 'react';



export default ({ comment, users, postId}) => {
  const author = users?.filter(obj=>
    obj.id === comment?.author_id
  )[0]
  const comment_date = new Date(comment?.created_at)
    if (postId=== comment?.post_id) {
    return (
      <li className="comment_class">
        <div className="wallPostHeader">Posted by {author?.username}</div>
        <div className="wallPostHeader">Posted on {comment_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })} at {comment_date.toLocaleTimeString([], {timeStyle: 'short'})}</div>
        
        <div className="commentBody">{comment?.body}</div>
        {/* <div className="wallPostButton">
          <button> like</button>
          <button> edit</button>
        </div> */}
      </li>
    )}
    }
  