import React from 'react';
import { Link } from 'react-router-dom'
import LoginFormContainer from '../session/login_form_container';

    
    const Homepage = ({ currentUser, logout, openModal }) => {

        const login = () => (
          <nav className="login">
            <h1 id="title">Welcome To MetaBook</h1>
                <LoginFormContainer />
            <button onClick={() => openModal('signup')}>Signup</button>
          </nav>
        );
        const personalGreeting = () => (
          <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
          </hgroup>
        );
      
        return (
          currentUser ?
          personalGreeting(currentUser, logout) :
          login()
        );
      };
      
      export default Homepage;
    
    
    
    
    
    
    
    
    
//     render(){
//         return(
//         <div>Hello World
//             <LoginFormContainer />
//         </div>
        
//         )
//     }
// }


// export default HomePage
