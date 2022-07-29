import React from 'react';

import { connect } from 'react-redux';
import { deletePost, fetchPosts } from '../../actions/posts_actions';
import Newsfeed from './newsfeed';
import { withRouter} from "react-router-dom"
import { openModal } from '../../actions/modal_actions';






const mapStateToProps = (state, ownProps) => {

  return {
  
  posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
  users: state.entities.users,
  user: state.entities.users[ownProps.match.params.userId],
  userId: ownProps.match.params.userId,
  currentUser: state.entities.users[state.session.id],

  
}};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  openModal: (modal)=> dispatch(openModal(modal= 'createpost')),
  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Newsfeed));