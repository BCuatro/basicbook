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
   
  likesCount > 0 ? displayCommentLikesCount = 
  <div className="like-container">
    <i className="fa-regular fa-thumbs-up"></i> {likesCount}
  </div> : displayCommentLikesCount= ""

  


  const author = users?.filter(obj=>
    obj.id === comment?.author_id
  )[0]
  
  // let dropdownId
  let visibility
  // if (currentUser?.id === comment?.author_id){
  //   dropdownId = "comment-dropdown"
  //   visibility= "non-visibility"
  // }
  // else{
  //   dropdownId = "dropdown-nonvisible"
  //   visibility = ""
  // }
  let dropdown 
  let dropdownMenu 
  let dropdownLinks
  let commentAndLikeId
  if (currentUser?.id === comment?.author_id){
  
    dropdown = "dropdown"
    dropdownMenu = "dropdown-menu"
    dropdownLinks= "dropdown-links"
    visibility= "non-visibility"
    commentAndLikeId = ""


  } else {
    dropdown = "nodropdown"
    dropdownMenu = "nodropdown"
    dropdownLinks= "nodropdown"
    commentAndLikeId = "nopointer"
    visibility = "nopointer"
  }

   
    // editbutton = <EditPostContainer post={post} />
    // editbutton =  <button onClick ={(modal , post) => {dispatch(openModal({modal: "editpost", post: post}))}}> Edit Post</button> 
    // deletebutton= <button onClick ={() => {deletePost(post.id)}}> Delete Post</button> 
  //   editbutton =  <button onClick ={() => updateComment("editcomment", comment)}> Edit Comment</button> 
  //   deletebutton =  <button 
  //   className="delete button" 
  //   onClick={() => { 
  //     const confirmation = 
  //     window.confirm("Are you sure you want to delete this comment?")
  //     if (confirmation === true) {
  //       deleteComment(comment.id)
  //     }
  //     }}>Delete Comment </button>
  // } else {
  //   deletebutton = ""
  //   editbutton = ""
  
    if (postId=== comment?.post_id) {
    return (
      
      <li className="comment-class-container">
        <div className= "comment-class-and-header">
          <div className= "comment-photo-container" >
                <img  src={author?.profile_photoUrl ? author?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } className= "post-photo" id= "profile-picture" /> 
          </div>
          <div className="comment_class-and-like-button" id ={commentAndLikeId}>
            <div className="comment-body-with-likes">
              <div className ="comment_class">
                <div className = "post-header">
                  <div className ="post-header-content">
                    

                    <div id = "comment-content">
                      <div id="comment-header-name"> {author?.first_name} {author?.last_name} </div>
                      <div id="comment-header-name-sub"> @{author?.username}</div>
                    </div>

                     
                                
                  </div>
                  
                </div>

 
                  <div className="comment-body">
                    <div id= "comment-body-content">{comment?.body}</div>
                  </div>
              </div>
              <div className="like-and-dropdown">
                <div className={dropdown}>
                  <div className={dropdownMenu}>
                    <button>...</button>
                      <ul id= "comment-downdrop-menu">
                        <li><div className={dropdownLinks} 
                                  onClick ={() => 
                                  updateComment("editcomment", comment)}>
                                  Edit Comment</div></li>

                        <li><div className= {dropdownLinks}
                                  onClick={() => { 
                                  const confirmation = 
                                  window.confirm("Are you sure you want to delete this comment?")
                                  if (confirmation === true) {
                                    deleteComment(comment.id)
                                  }
                                  }}>Delete Comment</div></li>
                      </ul>
                  </div>
                </div>
                <div className= "spaceholder" id={visibility}>...</div>

                <div className= "comment-likes">{displayCommentLikesCount}</div>
              </div>

              



            </div>
            
            <div className="comment-like-button">

                  <LikeContainer 
                  likeable_id ={comment.id}
                  currentUser_id ={currentUser?.id}
                  likeable_type ={"Comment"}
                  comment ={comment}
                  />
                  
            </div>
          </div>
          
        
        
        {/* <div className="dropdown"> 
          {deletebutton}
          {editbutton}
        </div> */}
        </div>

        
        
      </li>
    )}
    }
  