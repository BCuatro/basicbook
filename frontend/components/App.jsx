import React, {useState, useEffect} from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';
import HomePageContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import Profile from './profile/profile';
import NavBarContainer from './nav_bar/nav_bar_container';
import NavBarExtensionContainer from './nav_bar/nav_bar_extension_container';
import LoadingScreen from './loading/loading_screen';
import NotFoundError from './not_found/not_found_error';






function App() {
    const [loading, setloading] = useState("loading");
  useEffect(() => {
    setTimeout(() => {
      setloading("loaded");
    }, 2000);
  })
return (
    <div >
        {loading === "loading" ?
        <LoadingScreen /> :
        <div >
            <Modal/>
        
            <header>
                {/* <div className ="logo-container"><h1 className="logo">Basicbook</h1></div> */}
                {/* <div className= "navbar-container"> <NavBarContainer /></div> */}
                <div className ="navbar-container">
                    <Route path = "/" component = {NavBarContainer} />
                    <Route path = "/users/:userId" component ={NavBarExtensionContainer} />
                    
                </div>
            </header>
                    
                
                <Switch>

                    <ProtectedRoute path= "/users/:userId" component={ProfileContainer}/>
                    {/* <ProtectedRoute exact path= "/404NotFound" component={NotFoundError} /> */}
                    
                    {/* <ProtectedRoute exact path="/" component ={HomePageContainer} /> */}
                    <Route exact path="/" component ={HomePageContainer} />
                    <Route path="/*" component={NotFoundError} />
                   
                </Switch>
        </div> 
        }   
    </div>
)
}

export default App;
