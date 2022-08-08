import React, {useState} from 'react';
import { Link, useParams, matchPath } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import ReactDOM from 'react-dom';
import { fetchUsers } from '../../actions/users_actions';
import FriendRequestContainer from '../friends/friend_request_container';




const NavBar = ({currentUser, logout, users}) => {
   
    // const params = useParams()
    
    // const [state, setState] = useState(false)
    // const changevalueonScroll = () => {
    //     const scrollvalue = document.documentElement.scrollTop
    //     if (scrollvalue > 700){
    //         setState(true)
    //     }
    //     else{
    //         setState(false)
    //     }
    // }
    // window.addEventListener('scroll', changevalueonScroll)
    
    const liNavBar = currentUser ? (
        // <div className ="navbar-container">
            <div className="navbar-item-container">
                <div className ="logo-container">
                    <h1 className="logo">Basicbook</h1>
                </div>
                <div className ="navbar-items">
                    <div id = "home-links"> 
                    <Link id = "home-link" to={"/"}><i class="fa fa-solid fa-2x fa-house"></i></Link> 
                    </div>

                    <div className = "notification-container"> 
                    <button className="notification-button"><i class="fa fa-regular fa-2x fa-bell"></i> </button>
                    <div className= "notification-list">
                    <div className="notification-links">Link 1</div>
                    <div className="notification-links">Link 2</div>
                    <div className="notification-links">Link 3</div>
                        {/* <ul className= "wall_posts">
                                { 
                                    this.props.friends 
                                    // .sort((a,b) => a.created_at > b.created_at ? -1 : 1)
                                    .map((friend , i) => (
                                        // this.props.users[friend?.friend_id]?.username
                                        <FriendRequestItem
                                        key={`fRi-${i}`}
                                            friend={friend}
                                            // user= {this.props.user}
                                            // currentUser= {this.props.currentUser}
                                            // users= {(this.props.users)}
                                        />
                                    )
                                    )
                                    }
                                
                            </ul> */}


                    </div>
                    </div>

                    <div id ="profile-link">
                        <Link to={`/users/${currentUser.id}`}>Profile</Link>
                        <button className="logout-button" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
            
        // </div>
        
    ) : ""
    
    return (
        liNavBar
    )    
   
}
export default NavBar