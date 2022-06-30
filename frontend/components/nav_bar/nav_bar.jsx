import React from 'react';
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import ReactDOM from 'react-dom';
import { fetchUsers } from '../../actions/users_actions';


const NavBar = ({currentUser, logout}) => {
    
    const liNavBar = currentUser ? (
        <div>
            
            <Link to={`/users/${currentUser.id}`}>Profile</Link>
            
            <br />
            <Link to={"/"}>Home</Link>
            
            <br />
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    ) : ""
    
    return (
        liNavBar
    )    
   
}
export default NavBar