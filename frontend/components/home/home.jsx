import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from '../nav_bar/nav_bar_container';
import GreetingContainer from '../nav_bar/nav_bar_container';
import Post_container from '../posts/post_container';
import ProfileContainer from '../profile/profile_container';
import LoginFormContainer from '../session/login_form_container';

    
    const Homepage = ({ currentUser, logout, openModal}) => {
        
        const login = () => (
          <nav className="login">
            
            <div className ="welcomeContainer">
                <div className="word">Welcome</div>
                <div className="word">To</div>
                <div className="word">Basicbook</div>

            </div>
          
            <LoginFormContainer />
            {/* <button onClick={() => openModal('signup')}>Signup</button> */}
          </nav>
        );
        const Home = () => (
          <nav className= "home">
            <hgroup className= "header-group">
              <h2 className="header-group">`Hi ${currentUser.username}`</h2>
            </hgroup>
            <div>
             <h2 className="header-group">`Hi ${currentUser.username}`</h2>
            </div>
            
          </nav>


          
          // <hgroup className="header-group">
          //   <h2 className="header-name">Hi, {currentUser.username}! {currentUser.id}</h2>            
          // </hgroup>
        );
        
      
        return (
          currentUser ?
          Home(currentUser) :
          login()
        );
      };
      export default Homepage;
  
    
    
    

