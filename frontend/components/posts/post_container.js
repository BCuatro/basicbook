import React from 'react';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/posts_actions';
import Post from './post';
// import SessionForm from './session_form';




const mapStateToProps= (state, ownProps) =>{
    return{
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        errors: state.errors.posts


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        openModal: (modal, userId)=> dispatch(openModal(modal= 'createpost', userId = userId)),
        removeErrors: ()=> dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal())
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))