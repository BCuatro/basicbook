import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { login, removeLoginErrors, removeSignupErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createPost, removeErrors } from '../../actions/posts_actions';
import { createFriendship, deleteFriendship } from '../../actions/friends_actions';
import Friendship from './friendship';
import { fetchFriends } from "../../actions/friends_actions";
import { fetchUser, fetchUsers } from '../../actions/users_actions';




// import SessionForm from './session_form';




const mapStateToProps= (state, ownProps) =>{
    
    return{
        
        currentUser:state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        userId: ownProps.match.params.userId,
        friends: Object.keys(state.entities.friends).map(key => state.entities.friends[key])


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        createFriendship: (formData) => dispatch(createFriendship(formData)),
        deleteFriendship: (friendId) => dispatch(deleteFriendship(friendId)),
        removeErrors: ()=> dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal()),
        fetchFriends: () => dispatch(fetchFriends()),
        fetchUsers: () => dispatch(fetchUsers())
        
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friendship))