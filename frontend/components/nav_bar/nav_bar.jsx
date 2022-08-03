import React from 'react';
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import ReactDOM from 'react-dom';
import { fetchUsers } from '../../actions/users_actions';


const NavBar = ({currentUser, logout}) => {
    
    const liNavBar = currentUser ? (
        <div className ="navbar-items">
            <div id = "home-link"> <Link to={"/"}>Home</Link> </div>

            <div id ="profile-link">
                <Link to={`/users/${currentUser.id}`}>Profile</Link>
                <button className="logout-button" onClick={logout}>Log Out</button>
            </div>
        </div>
    ) : ""
    
    return (
        liNavBar
    )    
   
}
export default NavBar