import React from 'react';
import { openModal } from '../../actions/modal_actions';

import CommentIndexContainer from '../comments/comments_index_container';

import NewCommentContainer from '../comments/new_comment_container';
import LikeContainer from '../likes/like_container';





const PostItem = ({ post, user, users, deletePost,page, updatePost, currentUser,likes}) => {
   let likesCount = 0
   let displayLikesCount

   Object.values(likes).forEach(like => {
    if (like.likeable_id === post.id && like.likeable_type === "Post") {
      likesCount++
    }
  })

  likesCount > 0 ? displayLikesCount = likesCount : displayLikesCount= ""

  const author = users?.filter(obj=>
    obj.id === post?.author_id
  )[0]

  let editbutton 
  let deletebutton 
  let postImage
  if (post.post_photoUrl){
    postImage = <img className = "post-photo" src={post.post_photoUrl} alt="" />
  } else {
    postImage = ""
  }
  if (currentUser?.id === post?.author_id){
    // editbutton = <EditPostContainer post={post} />
    // editbutton =  <button onClick ={(modal , post) => {dispatch(openModal({modal: "editpost", post: post}))}}> Edit Post</button> 
    editbutton =  <button onClick ={() => updatePost("editpost", post)}> Edit Post</button> 
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
   
  const renderedPosts = () => (
    <li className="post_class">
      <div className="wallPostHeader">Posted by {author?.username}</div>
      <div className="wallPostHeader">Posted on {post_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })} at {post_date.toLocaleTimeString([], {timeStyle: 'short'})}</div>
      
      <div className="wallPostBody">
        {post.body}
        <br />
        {postImage} 

        
      
      </div>
      {displayLikesCount}
      <div className="wallPostButton">
        {/* <button> like</button> */}
        {/* <button onClick ={() => {modal}}> edit</button> */}
      </div>
      
      {deletebutton}
      {editbutton}
      <LikeContainer 
      likeable_id ={post?.id}
      currentUser_id ={currentUser?.id}
      likeable_type ={"Post"}
      />
      
      <br />
      <CommentIndexContainer post= {post} likes = {likes}/>
      <NewCommentContainer post ={post} />
    </li>
  )

    if(page === "profile"){
      if (user?.id === parseInt(post?.profile_id)) {
        return (
            renderedPosts()
        )
      }
    } else if (page === "home"){
      // if (user?.id !== parseInt(post?.profile_id) && parseInt(post?.profile_id) === parseInt(post?.author_id)) 
      if (parseInt(post?.profile_id) === parseInt(post?.author_id)) {
        return (
          renderedPosts()
        )
      }
    }
  }
export default PostItem
  