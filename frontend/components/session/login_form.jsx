import React from 'react';


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
        this.props. processForm(this.state);

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
                    <h3> {this.props.formtype}</h3>
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
                    </div>
                </form>

            </div>
        )
       
    }
}

export default LoginForm