import {connect} from 'react-redux'
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import NavBar from './nav_bar';




const mapStateToProps =(state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        friends: Object.keys(state.entities.friends).map(key => state.entities.friends[key]),
        user:state.entities.users[ownProps.match.params.userId],
        usersArray: Object.keys(state.entities.users).map(key => state.entities.users[key])
        // user: state.entities.users[ownProps.match.params.userId],
        
        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers :()=> dispatch(fetchUsers()),
    logout: () => dispatch(logout())
    
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)



