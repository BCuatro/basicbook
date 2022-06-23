import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
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
        
        </header>
            <div>
            <GreetingContainer/>
                {/* <Route path="/" component={GreetingContainer}/>*/}
               
                {/* <AuthRoute exact path="/login" component={LoginFormContainer}/> */}
                {/* <Route exact path ="/" component = {SignupFormContainer}/> */}
                {/* <Route exact path="/" component={home} />  */}

            </div>
         
    </div>
)

export default App;

ProtectedRoute