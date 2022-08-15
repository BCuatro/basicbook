import React from 'react';
import { Link } from 'react-router-dom'
import FriendItem from '../friends/friend_item';
import NavBarContainer from '../nav_bar/nav_bar_container';
import GreetingContainer from '../nav_bar/nav_bar_container';
import PostContainer from '../posts/post_container';
import ProfileContainer from '../profile/profile_container';
import LoginFormContainer from '../session/login_form_container';
import NewsfeedContainer from './newsfeed_container'

    
    const Homepage = ({ currentUser, users, user, friends, logout, openModal}) => {
        const login = () => (
          <div className="login">
            
            <div className ="welcomeContainer">
                <div className="word">Welcome</div>
                <div className="word">To</div>
                <div className="word">Basicbook</div>
              
            </div>
            <div className="login-form-container"><LoginFormContainer /></div>
          
          </div>
          
        );
        const Home = (currentUser, users ,user, friends) => (
          <div className= "home">
            
            
            <main className ="main-content" id = "main-home">
              {/* <div>
                  <h2 className="header-group"> Hi ${currentUser?.username} </h2>
              </div> */}
              
             
           

              <div className ="newsfeed">
                <NewsfeedContainer />
              </div>

              <div className="person-container">
                      <h2 className="person-title">About Eric Balfour</h2>
                      <div className="about-me-links">
                          <a target="_blank" href="https://github.com/BCuatro">
                          <i class="fa fa-2x fa-brands fa-github"></i> GitHub Account
                          </a>
                          <a target="_blank" href="https://bcuatro.github.io/Eric-Balfour/">
                          <i class="fa fa-2x fa-solid fa-at"></i> Personal Portfolio
                          </a>
                          <a target="_blank" href="www.linkedin.com/in/eric-balfour">
                            <i class="fa fa-2x fa-brands fa-linkedin"></i> Linkedin Account
                          </a>
                      </div>
                  </div>
            </main>
            {/* <aside className ="sidebar-right" id= "sidebar-right-home">
            
                        <h5>Profile Sidebar 2</h5>
                        <ul className= "friends-home">
                                {
                                    friends
                                    // .sort((a,b) => a.created_at > b.created_at ? -1 : 1)
                                    .map((friend, ind) => (
                                        // this.props.users[friend?.friend_id]?.username
                                        <FriendItem
                                            key={`fi-${ind}`}
                                            friend={friend}
                                            user= {user}
                                            currentUser= {currentUser}
                                            users= {(users)}
                                        />
                                    )
                                    )
                                }
                            
                        </ul>

            </aside> */}
            
          </div>


          
          // <hgroup className="header-group">
          //   <h2 className="header-name">Hi, {currentUser.username}! {currentUser.id}</h2>            
          // </hgroup>
        );
        
        return (
          currentUser ?
          Home(currentUser, users, user, friends) :
          login()
        );
      };
      export default Homepage;
  
    
    
    

