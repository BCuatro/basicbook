import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import { fetchProfile, fetchUser, fetchUsers, updateUser} from "../../actions/users_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import Profile from "./profile";




const mapStateToProps = (state, ownProps) => {

    const users =state.entities.users
    const user =state.entities.users[ownProps.match.params.userId]
    const currentProfile= state.entities.profile[ownProps.match.params.userId]
    const currentUser =state.entities.users[state.session.id]
    const userId= ownProps.match.params.userId
    // const profile_id = 
    return{
      users,
      user,
      currentUser,
      userId,
      currentProfile
    }
      
  };
  
  const mapDispatchToProps = (dispatch) => {

    return {

        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        // openModal: (modal)=> dispatch(openModal({modal: modal})),
        openModal: (modal, phototype)=> dispatch(openModal({modal: modal, phototype: phototype})),
        closeModal: () => dispatch(closeModal()),
        // updateUser: (id, formData)=> dispatch(updateUser(id, formData))
        

    };
  };

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile))