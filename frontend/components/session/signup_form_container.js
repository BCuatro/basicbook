import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';




const mapStateToProps= (state) => {
    console.log(state)
    // debugger
    return{

        errors: state.errors.session,
        formtype: "Sign Up"
        


    }
}

const mapDispatchToProps= dispatch => {
    return{
        createNewUser: (user) => dispatch(signup(user))
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)