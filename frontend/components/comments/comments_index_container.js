import React from 'react';

import { connect } from 'react-redux';
import { deleteComment, fetchComments } from '../../actions/comments_actions';
import CommentsIndex from './comments_index';
import { withRouter} from "react-router-dom"





const mapStateToProps = (state, ownProps) => {

  return {
  
  comments: Object.keys(state.entities.comments).map(key => state.entities.comments[key]),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  userId: ownProps.match.params.userId
  
}};

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments()),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex));