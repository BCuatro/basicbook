import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from '../nav_bar/nav_bar_container';
import GreetingContainer from '../nav_bar/nav_bar_container';
import PostContainer from '../posts/post_container';
import ProfileContainer from '../profile/profile_container';
import LoginFormContainer from '../session/login_form_container';
import NewsfeedContainer from './newsfeed_container'
    
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
        const Home = (user) => (
          <div className= "home">
            <div>
                <h2 className="header-group"> Hi ${user?.username} </h2>
            </div>

            <div className ="newsfeed">
              <NewsfeedContainer />
              
            </div>
            
          </div>


          
          // <hgroup className="header-group">
          //   <h2 className="header-name">Hi, {currentUser.username}! {currentUser.id}</h2>            
          // </hgroup>
        );
        
      debugger
        return (
          currentUser ?
          Home(currentUser) :
          login()
        );
      };
      export default Homepage;
  
    
    
    

