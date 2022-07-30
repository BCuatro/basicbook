import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { login, removeLoginErrors, removeSignupErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors, updateComment } from '../../actions/comments_actions';
import EditComment from './edit_comment';
// import SessionForm from './session_form';



const mapStateToProps= (state, ownProps) =>{
    return{

        // currentUser:state.entities.users[state.session.id],
        // user: state.entities.users[ownProps.match.params.userId],
        // users: state.entities.users,
        // userId: ownProps.match.params.userId,
        // errors: state.errors.comments


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        updateComment: (comment) => dispatch(updateComment(comment)),
        removeErrors: ()=> dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditComment)