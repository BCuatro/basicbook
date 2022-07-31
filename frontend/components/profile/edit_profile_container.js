import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { signup, removeSignupErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchUser, updateUser } from '../../actions/users_actions';
import EditForm from './edit_profile_form';


const mapStateToProps= (state, ownProps) => {
    
    return{
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId
        // signupErrors: state.errors.signupErrorSession,

    }
}

const mapDispatchToProps= dispatch => {
    return{
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeSignupErrors()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        closeModal: () => dispatch(closeModal()),
        updateUser: (id, formData)=> dispatch(updateUser(id, formData))
        
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm))