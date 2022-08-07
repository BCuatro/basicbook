import React from 'react';
import CommentItem from './comment_item';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    // this.props.fetchComments();
    // this.props.fetchUser(this.props.match.params.userId)
  }

  handleOpenModal(modal, comment) {
   
    // return function(e){
      // e.preventDefault();
      this.props.openModal(modal, comment)
  }
  
  render() {
    // console.log(Object.values(this.props.users))
  
    return (
  
      <div className="comment-container">
      
        <ul className= "postComments">
          {
            this.props.comments.map(comment => (
              <CommentItem
              key={`${comment.id}`}
              postId={this.props.post?.id}
              comment={comment}
              users= {Object.values(this.props.users)}
              deleteComment = {this.props.deleteComment}
              currentUser = {this.props.currentUser}
              updateComment= {this.handleOpenModal}
              likes = {this.props.likes}
              />
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default CommentsIndex;