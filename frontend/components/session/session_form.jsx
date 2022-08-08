import React from 'react';
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            email:"",
            first_name: "",
            last_name: "",
            password: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
        
    
    }
    // componentWillUnmount(){
    //     this.props.removeErrors();
    // }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(this.props.closeModal);

    }
   
    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }
    renderErrors() {
        return(
            <ul> 
                {this.props.signupErrors.map((error, index) => (
                <li key={`error-${index}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
      }

    render(){
        console.log()
        return(
            <div className="signup-form-container">
                {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
                
                <form onSubmit={this.handleSubmit}>
                    <div className ="signup-form-header">
                        <h2 className= "signup-form-title">Sign Up</h2>
                        <p className = "signup=form-subtitle">Just a basic sign up form</p>
                        <div
                        onClick={()=>{
                            this.props.closeModal();
                            this.props.removeErrors();
                        }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                        {/* <button onClick={()=>{
                                this.props.closeModal();
                                this.props.removeErrors();
                            }} className="close-x"><i className="fa fa-lg fa-x"></i></button> */}
                    </div>
                    
                    
                    {/* <div> {this.renderErrors()}</div> */}
                    <div className="signup-form">   
                        <div className = "full-name-container"> 
                            <div className="modal-input-container">
                                <input type="text" 
                                    id="first_name"
                                    required
                                    style={this.props.signupErrors.join(" ").includes("First") ? {borderColor: "red"} : {borderColor:""}}
                                    className="modal-input"
                                    value={this.state.first_name}
                                    onChange={this.handleInput('first_name')}
                                />
                                <label htmlFor= "first_name" className="modal-label" id= "first-name-label">First Name:</label>
                                <div className= "errors" 
                                    id={this.props.signupErrors.join(" ").includes("First") ? "signup-errors": "non-visible"}>
                                    First name is invalid 
                                </div>
                            </div>
                            <div className="modal-input-container">
                                <input type="text"  //take a look at your label
                                    id="last_name"
                                    required
                                    style={this.props.signupErrors.join(" ").includes("Last")? {borderColor: "red"} : {borderColor:""}}
                                    className= "modal-input"
                                    value={this.state.last_name}
                                    onChange={this.handleInput('last_name')}
                                />
                                <label htmlFor= "last_name" className="modal-label" id="last-name-label">Last Name:</label>
                                <div className= "errors" 
                                    id={this.props.signupErrors.join(" ").includes("Last") ? "signup-errors": "non-visible"}>
                                    Last name is invalid 
                                </div>
                            </div>
                        </div>
                        <div className="modal-input-container">
                            <input type="text" 
                                id="signup-email"
                                required
                                style={this.props.signupErrors.length > 0 ? {borderColor: "red"} : {borderColor:""}}
                                className="modal-input"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            <label htmlFor= "signup-email" className="modal-label">Email:</label>
                            <div className= "errors" 
                                    id={this.props.signupErrors.join(" ").includes("Email") ? "signup-errors": "non-visible"}>
                                    Email is invalid 
                            </div>
                        </div>
                        <div className="modal-input-container">   
                            <input type="text" 
                                id="signup-username"
                                required
                                style={this.props.signupErrors.join(" ").includes("Username") ? {borderColor: "red"} : {borderColor:""}}
                                className= "modal-input"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                            <label htmlFor= "signup-username" className="modal-label">Username:</label>
                            <div className= "errors" 
                                    id={this.props.signupErrors.join(" ").includes("Username") ? "signup-errors": "non-visible"}>
                                    Username is invalid 
                            </div>
                        </div> 
                        <div className="modal-input-container">
                            <input type="password" 
                                id="signup-password"
                                required
                                style={this.props.signupErrors.join(" ").includes("Password") ? {borderColor: "red"} : {borderColor:""}}
                                className = "modal-input"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <label htmlFor= "signup-password" className="modal-label">Password:</label>
                            <div className= "errors" 
                                    id={this.props.signupErrors.join(" ").includes("Password") ? "signup-errors": "non-visible"}>
                                    Password is invalid 
                            </div>
                        </div>
                        
                       
                        <button className='login-form-signup' onClick = {this.handleSubmit}>Sign Up</button>
                        
                    </div>
                </form>

            </div>
        )
       
    }
}

export default withRouter(SessionForm)