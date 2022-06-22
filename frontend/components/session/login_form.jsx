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
        this.handleImput = this.handleInput.bind(this)
    
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props. processForm(user).then(this.props.closeModal);

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
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formtype} </h2>
                    <br />
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div> {this.renderErrors()}</div>
                    <div>
                
                        <label>Username:
                            <input type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                        </label>
                      

                        <label>Password:
                            <input type="password" 
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick = {this.handleSubmit}>Log In</button>
                        {this.props.otherForm}
                    </div>
                </form>

            </div>
        )
       
    }
}

export default withRouter(LoginForm)