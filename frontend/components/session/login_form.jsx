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
        return(
            
            <div>
                {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
                <form onSubmit={this.handleSubmit}>
                    {/* <h2>{this.props.formtype} </h2> */}
                  
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
    
                    <div className= "loginform">
                    <p>Log In</p>
                    <div className= "errors">{this.renderErrors()} </div>

                    <div className="modal-input-container">   
                            <input type="text" 
                                id="username"
                                required
                                className= "modal-input"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                            <label htmlFor= "username" className="modal-label">Username:</label>
                        </div> 
                        <br />
                        <div className="modal-input-container">
                            <input type="password" 
                                id="password"
                                required
                                className = "modal-input"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <label htmlFor= "password" className="modal-label">Password:</label>
                        </div>
                        <button onClick = {this.handleSubmit}>Log In</button>
                        <button onClick = {this.handleDemoUser}>DemoUser</button>
                        <button onClick = {this.handleOpenModal}>Sign Up</button>
                        {/* <div className = "loader">
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                            <div className= "circle"></div>
                        </div> */}



                    </div>
                </form>

            </div>
        )
       
    }
}

export default withRouter(LoginForm)