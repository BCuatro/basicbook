import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <header>
                <h1>Metabook</h1>
                <Link to ="/signup" component = {SignupFormContainer}/>
        </header>
            <Switch>
            <Route exact path="/login" component={LoginFormContainer}/>
            <Route exact path ="/signup" component = {SignupFormContainer}/>

            </Switch>
         
    </div>
)

export default App;
