import React from 'react';

import { connect } from 'react-redux';
import { deletePost, fetchPosts } from '../../actions/posts_actions';
import Newsfeed from './newsfeed';
import { withRouter} from "react-router-dom"
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/users_actions';






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
  openCreateModal: ()=> dispatch(openModal({modal:'createpost'})),
  openEditModal: (modal, post)=> dispatch(openModal({modal: modal, post: post})),
  fetchUsers: () => dispatch(fetchUsers())
  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Newsfeed));