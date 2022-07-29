import React from 'react';
import CommentItem from './comment_item';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments();
    // this.props.fetchUser(this.props.match.params.userId)
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