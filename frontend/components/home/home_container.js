import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser } from "../../util/users_api_util";
import HomePage from "./home";


    const mapStateToProps = (state,ownProps) => {
    const currentUser= state.entities.users[state.session.id]
    const user= state.entities.users[ownProps.match.params.userId]
    const friends = Object.keys(state.entities.friends).map(key => state.entities.friends[key])
    const users =state.entities.users
    // userId: parseInt(ownProps.match.params.user.id),
    return {
        currentUser,
        user,
        friends,
        users
        }
    }

    const mapDispatchToProps = (dispatch)=> ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })


    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))