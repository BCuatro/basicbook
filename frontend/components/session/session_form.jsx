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
        this.props.createNewUser(user).then(this.props.closeModal);

    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }
    renderErrors() {
        return(
            <ul> 
                {this.props.errors.map((error, index) => (
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
                <pre>{JSON.stringify(this.state,undefined,2)}</pre>
                <form onSubmit={this.handleSubmit}>
                    Welcome to MetaBook!
                    <br />
                    {this.props.formtype} or {this.props.otherForm}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                     <div> {this.renderErrors()}</div>
                    <div>
                
                        <label>Username:
                            <input type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                        </label>
                        <label>Email:
                            <input type="text" 
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>First Name:
                            <input type="text" 
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')}
                            />
                        </label>
                        <label>Last Name:
                            <input type="text" 
                            value={this.state.last_name}
                            onChange={this.handleInput('last_name')}
                            />
                        </label>

                        <label>Password:
                            <input type="password" 
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick = {this.handleSubmit}>SignUp</button>
                    </div>
                </form>

            </div>
        )
       
    }
}

export default withRouter(SessionForm)