import React from 'react';

import CommentIndexContainer from '../comments/comments_index_container';

import NewCommentContainer from '../comments/new_comment_container';
import EditPostContainer from '../posts/edit_post_container';


export default ({ post, user, users, modal, deletePost}) => {
  const author = users?.filter(obj=>
    obj.id === post?.author_id
  )[0]

  let editbutton 
  let deletebutton 
  if (user?.id === post?.author_id){
    editbutton = <EditPostContainer post={post} />
    // deletebutton= <button onClick ={() => {deletePost(post.id)}}> Delete Post</button> 
    deletebutton =  <button 
    className="delete button" 
    onClick={() => { 
      const confirmation = 
      window.confirm("Are you sure you want to delete this post?")
      if (confirmation === true) {
        deletePost(post.id)
      }
      }}>Delete Post </button>
  } else {
    editbutton = ""
    deletebutton = ""
  }
  const post_date = new Date(post?.created_at)
    if (user?.id === parseInt(post?.profile_id)) {
    return (
      <li className="post_class">
        <div className="wallPostHeader">Posted by {author?.username}</div>
        <div className="wallPostHeader">Posted on {post_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })} at {post_date.toLocaleTimeString([], {timeStyle: 'short'})}</div>
        
        <div className="wallPostBody">{post?.body}</div>
        <div className="wallPostButton">
          {/* <button> like</button> */}
          {/* <button onClick ={() => {modal}}> edit</button> */}
        </div>
        
        {deletebutton}
        {editbutton}
        <CommentIndexContainer post= {post} />
        <NewCommentContainer post ={post} />
      </li>
    )}
    }
  