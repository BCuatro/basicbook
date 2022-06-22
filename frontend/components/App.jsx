import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import home from './home/home';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <h1>Metabook</h1>
            <GreetingContainer/>
        
        </header>
            <div>
                {/* <Route path="/" component={GreetingContainer}/>
                <Route exact path="/" component={home} /> */}
                {/* <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path ="/signup" component = {SignupFormContainer}/> */}

            </div>
         
    </div>
)

export default App;

