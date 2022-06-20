import React from 'react';


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
        this.props.createNewUser(this.state);

    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3> {this.props.formtype}</h3>
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

export default SessionForm