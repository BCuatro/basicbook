import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import Newsfeed from './newsfeed';
import { withRouter} from "react-router-dom"




const mapStateToProps = (state, ownProps) => {

  return {
  
  posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
  users: state.entities.users,
  user: state.entities.users[ownProps.match.params.userId],
  userId: ownProps.match.params.userId
  
}};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Newsfeed));