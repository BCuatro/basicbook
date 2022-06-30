import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import PostIndex from './post_index';
import {useParams, withRouter} from "react-router-dom"


const mapStateToProps = (state, ownProps) => ({
  posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
  users: state.entities.users,
  user: state.entities.users[ownProps.match.params.userId],
  userId: ownProps.match.params.userId
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
//   fetchUser: (userId) => dispatch(fetchUser(userId)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));