import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from '../nav_bar/nav_bar_container';
import GreetingContainer from '../nav_bar/nav_bar_container';
import ProfileContainer from '../profile/profile_container';
import LoginFormContainer from '../session/login_form_container';

    
    const Homepage = ({ currentUser, logout, openModal}) => {
        
        const login = () => (
          <nav className="login">
            <h1 id="title">Welcome To MetaBook</h1>
                <LoginFormContainer />
            {/* <button onClick={() => openModal('signup')}>Signup</button> */}
          </nav>
        );
        const Home = () => (
          <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}! {currentUser.id}</h2>            
          </hgroup>
        );
        
      
        return (
          currentUser ?
          Home(currentUser) :
          login()
        );
      };
      export default Homepage;
  
    
    
    

