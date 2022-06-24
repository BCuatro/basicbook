import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
// import SessionForm from './session_form';




const mapStateToProps= (state, ownProps) =>{
    return{
        formtype: "Log In",
        errors: state.errors.session,


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)