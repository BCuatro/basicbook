import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import { fetchProfile, fetchUser, fetchUsers} from "../../actions/users_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import Profile from "./profile";
fetchProfile



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
        fetchProfile: (userId) => dispatch(fetchProfile(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        openModal: ()=> dispatch(openModal('editprofile')),
        closeModal: () => dispatch(closeModal())
        

    };
  };

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile))