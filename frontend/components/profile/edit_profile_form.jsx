import React from 'react';


class EditForm extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() {
        this.props.fetchUser(this.state.id)
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state).then(this.props.closeModal)
      }
    

    handleUpdate(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

   
    
    render(){ 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
             
                    <h2>Edit Profile</h2>
                    <h3>{this.state.username}</h3>
                    <h4>{this.state.email}</h4>
                    <div className="modal-input-container">
                        <input type="text" 
                            id="first_name"
                            required
                            className="modal-input"
                            value={this.state.first_name}
                            onChange={this.handleUpdate('first_name')}
                        />
                        <label htmlFor= "first_name" className="modal-label">First Name:</label>
                    </div>

                    <br />
                    <div className="modal-input-container">
                        <input type="text"  //take a look at your label
                            id="last_name"
                            required
                            className= "modal-input"
                            value={this.state.last_name}
                            onChange={this.handleUpdate('last_name')}
                        />
                        <label htmlFor= "last_name" className="modal-label">Last Name</label>
                        <br />
                    </div>
                    <div className="modal-input-container">
                        <input type="text"  //take a look at your label
                            id="bio"
                            required
                            className= "modal-input"
                            value={this.state.bio}
                            onChange={this.handleUpdate('bio')}
                        />
                        <label htmlFor= "bio" className="modal-label">Bio</label>
                        <br />
                    </div>
                    <div className="modal-input-container">
                        <input type="text"  //take a look at your label
                            id="location"
                            required
                            className= "modal-input"
                            value={this.state.location}
                            onChange={this.handleUpdate('location')}
                        />
                        <label htmlFor= "location" className="modal-label">Location</label>
                        <br />
                    </div>
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
     }
  
}
export default EditForm