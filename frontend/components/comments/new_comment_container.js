import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { login, removeLoginErrors, removeSignupErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createComment, removeErrors } from '../../actions/comments_actions';
import NewComment from './new_comment';
// import SessionForm from './session_form';



const mapStateToProps= (state, ownProps) =>{
    return{

        currentUser:state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        userId: ownProps.match.params.userId,
        errors: state.errors.comments


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        createComment: (comment) => dispatch(createComment(comment)),
        removeErrors: ()=> dispatch(removeErrors()),
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewComment))