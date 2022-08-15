import React, {useState} from 'react';
import { Link, useParams, matchPath } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import ReactDOM from 'react-dom';
import { fetchUsers } from '../../actions/users_actions';
import FriendRequestItem from '../friends/friend_request_item';
import Search from '../search/search_index';






const NavBar = ({currentUser, logout, usersArray, users, user, friends}) => {
    
    const liNavBar = currentUser ? (
        
        // <div className ="navbar-container">
            <div className="navbar-item-container">
                <div className ="logo-container">
                    <h1 className="logo">Basicbook</h1>
                </div>
                <div className ="navbar-items">
                    <Search users = {usersArray}/>
                    <div id = "home-links"> 
                    <Link id = "home-link" to={"/"}><i className="fa fa-solid fa-2x fa-house"></i></Link> 
                    
                    </div>
                    {/* <div className="notify" ></div> */}

                    {/* <div className = "notification-container">  */}
                        
                        {/* <ul className= "notification-list">
                            <li className="notification-links">Link 1</li>
                            <li className="notification-links">Link 2</li>
                            <li className="notification-links">Link 3</li> */}
                        {/* <ul className= "wall_posts">
                                { 
                                    this.props.friends 
                                    .sort((a,b) => a.created_at > b.created_at ? 1 : -1)
                                    .map((friend , ind) => (
                                        this.props.users[friend?.friend_id]?.username
                                        <FriendRequestItem
                                        key={`fRi-${ind}`}
                                            friend={friend}
                                            user= {this.props.user}
                                            currentUser= {this.props.currentUser}
                                            users= {(this.props.users)}
                                        />
                                    )
                                    )
                                 }
                                
                            </ul> */}


                        {/* </ul> */}
                    {/* </div> */}
                    <div className="notification-dropdown">
                        <div className="notification-dropdown-menu">
                            <button id = "bell"><i className=" fa fa-solid fa-2x fa-bell"></i></button>

                        <ul>
                                <p className="notification-title">Friend Request</p>
                            { 
                                friends 
                                // .sort((a,b) => a.created_at > b.created_at ? -1 : 1)
                                .map((friend , i) => (
                                    // this.props.users[friend?.friend_id]?.username
                                    <FriendRequestItem
                                    key={`fRi-${i}`}
                                        friend={friend}
                                        currentUser= {currentUser}
                                        users= {users}
                                    />
                                ))
                            }
                        </ul>
 






                        </div> {/* */}
                    </div> 

                    <div id ="profile-link">
                        <Link to={`/users/${currentUser.id}`}>
                            <img  
                            src={currentUser?.profile_photoUrl ? currentUser?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } className="navbar-photo" alt="" /></Link>
                            <div className="logout-icon" onClick={logout}><i className="fa fa-solid fa-2x fa-door-open"></i></div>
                        {/* <button className="logout-button" onClick={logout}>Log Out</button> */}
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

{/* <i className="fa fa-regular fa-2x fa-bell"></i> */}