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
                {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
                <h2>{this.props.formtype}</h2>
                <form onSubmit={this.handleSubmit}>
                    
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                     <div> {this.renderErrors()}</div>
                    <div>
                
                        <label>Username:
                            <input type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                        </label>
                        <br />
                        <label>Email:
                            <input type="text" 
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <br />
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
                        <br />

                        <label>Password:
                            <input type="password" 
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick = {this.handleSubmit}>SignUp</button>
                        {this.props.otherForm}
                    </div>
                </form>

            </div>
        )
       
    }
}

export default withRouter(SessionForm)