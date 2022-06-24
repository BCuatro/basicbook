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
        this.handleImput = this.handleInput.bind(this)
    
    }

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
        return(
            <div>
                {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
                <h2>{this.props.formtype}</h2>
                <form onSubmit={this.handleSubmit}>
                    
                    <button onClick={this.props.closeModal} className="close-x">X</button>
                    <div> {this.renderErrors()}</div>
                    <div>   
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
                        <br />
                        <div className="modal-input-container">
                            <input type="text" 
                                id="email"
                                required
                                className="modal-input"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            <label htmlFor= "email" className="modal-label">Email:</label>
                        </div>
                        <br />
                        <div className="modal-input-container">
                            <input type="text" 
                                id="first_name"
                                required
                                className="modal-input"
                                value={this.state.first_name}
                                onChange={this.handleInput('first_name')}
                            />
                            <label htmlFor= "first_name" className="modal-label">First Name:</label>
                        </div>
                        <br />
                        <div className="modal-input-container">
                            <input type="text" 
                                id="last_name"
                                required
                                className= "modal-input"
                                value={this.state.last_name}
                                onChange={this.handleInput('last_name')}
                            />
                            <label htmlFor= "last_name" className="modal-label">Last Nanme</label>
                            <br />
                        </div>
                        <button onClick = {this.handleSubmit}>SignUp</button>
                        {this.props.otherForm}
                    </div>
                </form>

            </div>
        )
       
    }
}

export default withRouter(SessionForm)