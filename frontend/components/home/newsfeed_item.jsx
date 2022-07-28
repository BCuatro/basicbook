import React from 'react';



export default ({ post, user, users}) => {
  const author = users?.filter(obj=>
    obj.id === post?.author_id
  )[0]
  const post_date = new Date(post?.created_at)
    if (user?.id !== parseInt(post?.profile_id) && parseInt(post?.profile_id) === parseInt(post?.author_id))  {
      console.log(author)
      console.log(users)
    return (
      <li className="post_class">
        <div className="wallPostHeader">Posted by {author?.username}</div>
        <div className="wallPostHeader">Posted by {post_date.toLocaleDateString()}</div>
        
        <div className="wallPostBody">{post?.body}</div>
        {/* <div className="wallPostButton">
          <button> like</button>
          <button> edit</button>
        </div> */}
      </li>
    )}
    }
  