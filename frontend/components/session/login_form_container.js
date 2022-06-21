import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';




const mapStateToProps= (state, ownProps) =>{
    return{
        formtype: "Login",
        errors: state.errors.session,
        link: <Link to="/signup"> Sign Up </Link>


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        processForm : user => dispatch(login(user))
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)