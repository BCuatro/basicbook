import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';




// const mapStateToProps= ({state}) =>{
//     return{
//         formtype: "signup",
//         errors: state.errors,
//         // link: <Link to="/signup"> Sign Up </Link>


//     }
// }

const mapDispatchToProps= dispatch => {
    return{
        createNewUser: (user) => dispatch(signup(user))
        
        
    }
}


export default connect(null, mapDispatchToProps)(SessionForm)