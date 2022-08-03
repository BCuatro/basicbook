import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';

import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { createLike, deleteLike, fetchLikes } from '../../actions/likes_actions';
import LikeButton from './like';
import { fetchPost } from '../../actions/posts_actions';
import { fetchComment } from '../../actions/comments_actions';






const mapStateToProps= (state, ownProps) =>{
    
    return{
        
        likes: Object.keys(state.entities.likes).map(key => state.entities.likes[key]),

    }
}

const mapDispatchToProps= dispatch =>{
    return{
        createLike: (formData) => dispatch(createLike(formData)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        removeErrors: ()=> dispatch(removeErrors()),
        fetchFriends: () => dispatch(fetchFriends()),
        fetchLikes: () => dispatch(fetchLikes()),
        fetchComment:(commentId) => dispatch(fetchComment(commentId)),
        fetchPost: (postId) => dispatch(fetchPost(postId))

        
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButton))