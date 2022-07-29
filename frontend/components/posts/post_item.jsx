import React from 'react';

import CommentIndexContainer from '../comments/comments_index_container';

import NewCommentContainer from '../comments/new_comment_container';


export default ({ post, user, users}) => {
  const author = users?.filter(obj=>
    obj.id === post?.author_id
  )[0]
  const post_date = new Date(post?.created_at)
    if (user?.id === parseInt(post?.profile_id)) {
    return (
      <li className="post_class">
        <div className="wallPostHeader">Posted by {author?.username}</div>
        <div className="wallPostHeader">Posted on {post_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })} at {post_date.toLocaleTimeString([], {timeStyle: 'short'})}</div>
        
        <div className="wallPostBody">{post?.body}</div>
        <div className="wallPostButton">
          <button> like</button>
          <button> edit</button>
        </div>
        <CommentIndexContainer post= {post} />
        <NewCommentContainer post ={post} />
      </li>
    )}
    }
  