import React from 'react';
import { openModal } from '../../actions/modal_actions';
import CommentIndexContainer from '../comments/comments_index_container';
import NewCommentContainer from '../comments/new_comment_container';
import LikeContainer from '../likes/like_container';



const PostItem = ({ post, user, users, deletePost,page, updatePost, currentUser,likes, comments}) => {
   let likesCount = 0
   let displayLikesCount

   Object.values(likes).forEach(like => {
    if (like.likeable_id === post.id && like.likeable_type === "Post") {
      likesCount++
    }
  })

  likesCount > 0 ? displayLikesCount = 
  <div className="post-likes">
    <i className="fa-regular fa-thumbs-up"></i> {likesCount}
  </div> : displayLikesCount= ""

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
    
    editbutton =  <button onClick ={() => {dispatch(openModal({modal: "editpost", post: post}))}}> Edit Post</button> 
 
    deletebutton =  <button 
    className="delete button" 
    onClick={() => { 
      const confirmation = 
      window.confirm("Are you sure you want to delete this post?")
      if (confirmation === true) {
        deletePost(post?.id)
      }
      }}>Delete Post </button>
  } else {
    editbutton = ""
    deletebutton = ""
  }
  const post_date = new Date(post?.created_at)
   
  const renderedPosts = () => (
    <li className="post_item">

      <div className = "post-header">
        <div className ="post-header-content">
          <div className= "post-photo-container" >
            <img  src={author?.profile_photoUrl ? author?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } className= "post-photo" id= "profile-picture" /> 
          </div>
          

          <div className = "post-content">
            <div className="post-header-name"> {author?.first_name} {author?.last_name} </div>
            <div className="post-header-name-sub"> @{author?.username}</div>
            <div className="post-header-name-sub">
              Posted on {post_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })} at {post_date.toLocaleTimeString([], {timeStyle: 'short'})}
            </div>
          </div>
          
        </div>
        <div class="dropdown">
          <div class="dropdown-menu">
            <button>...</button>
              <ul>
                <li>
                  <div className="dropdown-links" 
                      onClick ={() => 
                      {dispatch(openModal({modal: "editpost", post: post}))}}>
                      Edit Post
                    </div>
                  </li>

                <li>
                  <div className= "dropdown-links"
                      onClick={() => { 
                      const confirmation = 
                      window.confirm("Are you sure you want to delete this post?")
                      if (confirmation === true) {
                        deletePost(post?.id)
                      }
                      }}>Delete Post 
                  </div>
                </li>
              </ul>
          </div>
        </div> 
      </div>
              
        <div className="post-body">
        
          <div className= "post-body-content">{post.body} </div>
          <br />
          {postImage} 
        </div>
      <div>
      {displayLikesCount}

      </div>
      
      <div className="wallPostButton">
        {/* <button> like</button> */}
        {/* <button onClick ={() => {modal}}> edit</button> */}
      </div>
      
      <div id="like-container">
        <LikeContainer 
        
        likeable_id ={post?.id}
        currentUser_id ={currentUser?.id}
        likeable_type ={"Post"}
        post = {post}
        />
      </div>
      
      <br />
      <CommentIndexContainer post= {post} likes = {likes} comments= {comments}/>
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
  