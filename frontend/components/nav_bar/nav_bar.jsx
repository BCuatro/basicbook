import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import ReactDOM from 'react-dom';
import { fetchUsers } from '../../actions/users_actions';


const NavBar = ({currentUser, logout, user}) => {
    
    const [state, setState] = useState(false)
    const changevalueonScroll = () => {
        const scrollvalue = document.documentElement.scrollTop
        if (scrollvalue > 700){
            setState(true)
        }
        else{
            setState(false)
        }
    }
    window.addEventListener('scroll', changevalueonScroll)
    
    const liNavBar = currentUser ? (
        <div className ="navbar-container">
            <div className="navbar-item-container">
                <div className ="logo-container">
                    <h1 className="logo">Basicbook</h1>
                </div>
                <div className ="navbar-items">
                    <div id = "home-link"> <Link to={"/"}>Home</Link> </div>

                    <div id ="profile-link">
                        <Link to={`/users/${currentUser.id}`}>Profile</Link>
                        <button className="logout-button" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
            <div className = "navbar-extension" id = {state ? "visible-navbar" : "hidden-navbar"}>
                {currentUser.username}
            </div>
        </div>
        
    ) : ""
    
    return (
        liNavBar
    )    
   
}
export default NavBar