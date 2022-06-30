import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser } from "../../util/users_api_util";
import HomePage from "./home";

    const mapStateToProps = (state,ownProps) => {
    const currentUser= state.entities.users[state.session.id]
    const user= state.entities.users[ownProps.match.params.userId]
    // userId: parseInt(ownProps.match.params.user.id),
    return {
        currentUser,
        user
        }
    }

    const mapDispatchToProps = (dispatch)=> ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })


    export default connect(mapStateToProps, mapDispatchToProps)(HomePage)