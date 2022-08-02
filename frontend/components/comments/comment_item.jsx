import React from 'react';
import LikeContainer from '../likes/like_container';
import EditCommentContainer from './edit_comment_container';



export default ({ comment, users, postId, deleteComment, currentUser, updateComment, likes}) => {
  
  let likesCount = 0
   let displayCommentLikesCount

   Object.values(likes).forEach(like => {
    if (like.likeable_id === comment.id && like.likeable_type === "Comment") {
      likesCount++
    }
  })

  likesCount > 0 ? displayCommentLikesCount = likesCount : displayCommentLikesCount= ""
  const author = users?.filter(obj=>
    obj.id === comment?.author_id
  )[0]
  
  let deletebutton
  let editbutton
  if (currentUser?.id === comment?.author_id){
   
    // editbutton = <EditPostContainer post={post} />
    // editbutton =  <button onClick ={(modal , post) => {dispatch(openModal({modal: "editpost", post: post}))}}> Edit Post</button> 
    // deletebutton= <button onClick ={() => {deletePost(post.id)}}> Delete Post</button> 
    editbutton =  <button onClick ={() => updateComment("editcomment", comment)}> Edit Comment</button> 
    deletebutton =  <button 
    className="delete button" 
    onClick={() => { 
      const confirmation = 
      window.confirm("Are you sure you want to delete this comment?")
      if (confirmation === true) {
        deleteComment(comment.id)
      }
      }}>Delete Comment </button>
  } else {
    deletebutton = ""
    editbutton = ""
  }
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
         <LikeContainer 
        likeable_id ={comment.id}
        currentUser_id ={currentUser?.id}
        likeable_type ={"Comment"}
        />
        {displayCommentLikesCount}
        {deletebutton}
        {editbutton}
      </li>
    )}
    }
  