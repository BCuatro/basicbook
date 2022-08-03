import {connect} from 'react-redux'
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import NavBar from './nav_bar';




const mapStateToProps =(state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        // user: state.entities.users[ownProps.match.params.userId],
        
        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers :()=> dispatch(fetchUsers()),
    logout: () => dispatch(logout())
    
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)



