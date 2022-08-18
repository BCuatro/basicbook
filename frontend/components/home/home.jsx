import React from 'react';
// import { Link } from 'react-router-dom'
// import FriendItem from '../friends/friend_item';
// import NavBarContainer from '../nav_bar/nav_bar_container';
// import GreetingContainer from '../nav_bar/nav_bar_container';
// import PostContainer from '../posts/post_container';
// import ProfileContainer from '../profile/profile_container';
import LoginFormContainer from '../session/login_form_container';
import NewsfeedContainer from './newsfeed_container'

    
    const Homepage = ({ currentUser, users, user, friends, logout, openModal}) => {
        const login = () => (
          <div className="login-splash-container">
            <div className="login">
              <div className ="welcomeContainer">
                  <div className="word">Welcome</div>
                  <div className="word">To</div>
                  <div className="word">Basicbook</div>
                
              </div>
              <div className="login-form-container"><LoginFormContainer /></div>
             
              </div>
              <div className= "login-footer-container">
                <div className="login-footer">
                  <div className= "footer-words" id = "first-sentence">A Facebook clone with a basic twist created by Eric Balfour</div>
                  <div className= "footer-words" id = "second-sentence">Techonlogies used to build Basicbook:  React, Javascript, Redux, JQuery, JBuilder, Postges, SASS, Ruby on Rails, </div>

                </div>
                
              </div>
          
          </div>
          
        );
        const Home = (currentUser, users ,user, friends) => (
          <div className= "home">
            <main className ="main-content" id = "main-home">
              
              <div className ="newsfeed">
                <NewsfeedContainer />
              </div>

              <div className="person-container">
                      <h2 className="person-title">Sponsership</h2>
                      <p className="about-eric">This clone was brought to you by Eric Balfour.  Before you leave, please visit the links below to learn more about Eric.  Thank You! </p>
                      <div className="about-me-links">
                          <a target="_blank" href="https://github.com/BCuatro">
                          <i className="fa fa-2x fa-brands fa-github"></i>
                          <p>GitHub Account</p>
                          </a>
                          <a target="_blank" href="https://bcuatro.github.io/Eric-Balfour/">
                          <i className="fa fa-2x fa-solid fa-at"></i>
                          <p>Personal Portfolio</p>
                          </a>
                          <a target="_blank" href="www.linkedin.com/in/eric-balfour">
                            <i className="fa fa-2x fa-brands fa-linkedin"></i>
                            <p>Linkedin Account</p>
                          </a>
                      </div>
                  </div>
            </main>
            
          </div>

        );
        
        return (
          currentUser ?
          Home(currentUser, users, user, friends) :
          login()
        );
      };
      export default Homepage;
  
    
    
    

