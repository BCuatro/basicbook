import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import HomePageContainer from './home/home_container';

const App = () => (
    <div>
        <Modal/>
        <header>
            <h1>Metabook</h1>
            {/* <GreetingContainer/> */}
        </header>
                
                
            <Switch>
                <Route path="/" component ={HomePageContainer} />
                {/* <Route exact path ="/login" component = {LoginFormContainer}/> */}
            </Switch>
         
    </div>
)

export default App;

