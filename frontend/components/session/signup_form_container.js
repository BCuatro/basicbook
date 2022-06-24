import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import SessionForm from './session_form';
import { signup, removeSignupErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';




const mapStateToProps= (state) => {
    console.log(state)
    // debugger
    return{

        signupErrors: state.errors.signupErrorSession,
        formtype: "Sign Up"

    }
}

const mapDispatchToProps= dispatch => {
    return{
        processForm: (user) => dispatch(signup(user)),
      
        closeModal: () => dispatch(closeModal()).then(()=> dispatch(removeSignupErrors()))
        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)