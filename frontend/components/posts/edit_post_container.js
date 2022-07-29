import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { login, removeLoginErrors, removeSignupErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { updatePost, removeErrors } from '../../actions/posts_actions';
import EditPost from './edit_post';
// import SessionForm from './session_form';





const mapStateToProps= (state, ownProps) =>{
    return{
        // currentUser: state.entities.users[state.session.id],
        // user: state.entities.users[ownProps.match.params.userId],
        // userId: ownProps.match.params.userId


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        updatePost: (post) => dispatch(updatePost(post)),
        removeErrors: ()=> dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPost)