import React from 'react';
import { withRouter } from 'react-router-dom';



class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);  
        this.handleOpenModal = this.handleOpenModal.bind(this);  
    }
    
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);

    }

    handleDemoUser(e){
        e.preventDefault();
        const demoUser = { username: "Black Panther", password:"wakanda"}
        this.props.processForm(demoUser).then(this.props.closeModal)
    }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal()
    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }
    renderErrors() {
        return(
            <ul> 
                {this.props.loginErrors.map((error, index) => (
                <li key={`error-${index}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
      }

    render(){
        let colo 
        console.log(colo)
        console.log(this.props.loginErrors.length)
        
        if(this.props.loginErrors.length> 0) colo = "red"
        const here =  <div 
        className="login-form-demo-user"
        id= "here"
        onClick = {this.handleDemoUser}>Click here to try Demo User</div>
        return(
            

            
            <div className= "login-form">
                {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
                <form onSubmit={this.handleSubmit}>
                    {/* <h2>{this.props.formtype} </h2> */}
                  
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
    
                    
                    <div className= "login-input">
                        <div className="modal-input-container" >   
                                <input type="text" 
                                    id="username"
                                    required
                                    className= "modal-input"
                                    style={this.props.loginErrors.length > 0 ? {borderColor: "red"} : {borderColor:""}}
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                />
                                <label htmlFor= "username" className="modal-label">Username:</label>
                        </div> 
                        
                        <div className="modal-input-container">
                            <input type="password" 
                                id="password"
                                required
                                className = "modal-input"
                                style={this.props.loginErrors.length > 0 ? {borderColor: "red"} : {borderColor:""}}
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <label htmlFor= "password" className="modal-label" id="label-password">Password:</label>

                            <div className= "errors">{this.renderErrors()} </div>
                        </div>
                        <button className="login-form-button"onClick = {this.handleSubmit}>Log In</button>
                        {/* <button className="login-form-demo-user"onClick = {this.handleDemoUser}>DemoUser</button> */}
                        <div 
                        className="login-form-demo-user"
                        onClick = {this.handleDemoUser}> 
                        Don't want to sign up?{here}</div>
                        <div className="login-form-signup-container">
                            <button className="login-form-signup"onClick = {this.handleOpenModal}>Sign Up</button>
                        </div>
                    </div>
                        
                        {/* <div className = "loader">
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                        </div> */}



                    
                </form>

            </div>
        )
       
    }
}

export default withRouter(LoginForm)