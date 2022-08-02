import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';

import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { createLike, deleteLike, fetchLikes } from '../../actions/likes_actions';
import LikeButton from './like';

fetchLikes


const mapStateToProps= (state, ownProps) =>{
    
    return{
        
        // currentUser:state.entities.users[state.session.id],
        // user: state.entities.users[ownProps.match.params.userId],
        // users: state.entities.users,
        // userId: ownProps.match.params.userId,
        // friends: Object.keys(state.entities.friends).map(key => state.entities.friends[key])


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        createLike: (formData) => dispatch(createLike(formData)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        removeErrors: ()=> dispatch(removeErrors()),
        fetchFriends: () => dispatch(fetchFriends()),
        fetchLikes: () => dispatch(fetchLikes())
        
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButton))