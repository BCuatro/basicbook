import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts, deletePost, fetchPost} from '../../actions/posts_actions';
import PostIndex from './post_index';
import { withRouter} from "react-router-dom"
import { openModal, closeModal } from '../../actions/modal_actions';






const mapStateToProps = (state, ownProps) => {

  return {
  
  posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
  likes: Object.keys(state.entities.likes).map(key => state.entities.likes[key]),
  users: state.entities.users,
  user: state.entities.users[ownProps.match.params.userId],
  userId: ownProps.match.params.userId,
  currentUser: state.entities.users[state.session.id],
  

  
}};

const mapDispatchToProps = (dispatch) => ({
  fetchPost:(postId) => dispatch(fetchPost(postId)),
  fetchPosts: () => dispatch(fetchPosts()),
  openModal: (modal, post)=> dispatch(openModal({modal: modal, post: post})),
  deletePost: (postId) => dispatch(deletePost(postId))
  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));