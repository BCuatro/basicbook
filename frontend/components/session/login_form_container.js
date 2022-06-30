import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import LoginForm from './login_form';
import { login, removeLoginErrors, removeSignupErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
// import SessionForm from './session_form';




const mapStateToProps= (state, ownProps) =>{
    return{
        formtype: "Log In",
        loginErrors: state.errors.loginErrorSession,


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        processForm: user => dispatch(login(user)),
        openModal: ()=> dispatch(openModal('signup')),
        removeErrors: ()=> dispatch(removeLoginErrors()),
        removeSignupError: ()=> dispatch(removeSignupErrors()),
        closeModal: () => dispatch(closeModal())
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))