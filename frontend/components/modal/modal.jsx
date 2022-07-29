import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewPostContainer from '../posts/new_post_container';
import EditProfileContainer from '../profile/edit_profile_container';
import EditPostContainer from '../posts/edit_post_container';
import { withRouter } from 'react-router-dom';





function Modal({modal, closeModal, userId, currentUser, post}) {
  console.log("this is in the modal",post)
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    // case 'login':
    //   component = <LoginFormContainer />;
    //   break;
    case 'signup':
      component = <SignupFormContainer className="signupForm" closeModal = {closeModal}/>;
      break;

    case 'createpost':
      component = <NewPostContainer className="newPost" closeModal = {closeModal} />;
      break;
    
    case 'editprofile':
      
      component = <EditProfileContainer className="editProfile" />;
      break;
    
    case 'editpost':
    
      component = <EditPostContainer post = {post}/>;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div>{ component }</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
