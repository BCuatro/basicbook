import React from 'react';


class EditForm extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
      }
    
      componentDidMount() {
        this.props.fetchUser(this.state.id)
      }

    
      handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[first_name]', this.state.first_name)
        formData.append('user[last_name]', this.state.last_name)
        formData.append('user[location]', this.state.location)
        formData.append('user[bio]', this.state.bio)
        formData.append('user[gender]', this.state.gender)
        formData.append('user[birth_date]', this.state.birth_date)
        this.props.updateUser(this.state.id, formData).then(this.props.closeModal)
   
      }
    

    handleUpdate(type) {
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
        const today = new Date(Date.now())
       
        return (
            <div className="edit-form">
                    <form onSubmit={this.handleSubmit}>
                    <div className ="edit-form-header">
                            <h2 className= "edit-form-title">Edit Profile</h2>
                            <div className= "edit-subtitle-container">
                                <p className = "edit-form-subtitle">Username: {this.state.username}</p>
                                <p className = "edit-form-subtitle">Email: {this.state.email}</p>
                            </div>
                            <div
                            onClick={()=>{
                                this.props.closeModal();
                                this.props.removeEditErrors();
                            }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                    </div>
                  
                    <div className = "edit-form-content-container">
                        <div className = "full-name-container"> 
                                <div className="modal-input-container">
                                    <input type="text" 
                                        id="first_name"
                                        required
                                        style={this.props.editErrors.join(" ").includes("First") ? {borderColor: "red"} : {borderColor:""}}
                                        className="modal-input"
                                        value={this.state.first_name}
                                        onChange={this.handleUpdate('first_name')}
                                    />
                                    <label htmlFor= "first_name" className="modal-label" id= "first-name-label">First Name:</label>
                                    <div className= "errors" 
                                        id={this.props.editErrors.join(" ").includes("First") ? "signup-errors": "non-visible"}>
                                        First name is invalid 
                                    </div>
                                </div>
                                <div className="modal-input-container">
                                    <input type="text"  
                                        id="last_name"
                                        required
                                        style={this.props.editErrors.join(" ").includes("Last")? {borderColor: "red"} : {borderColor:""}}
                                        className= "modal-input"
                                        value={this.state.last_name}
                                        onChange={this.handleUpdate('last_name')}
                                    />
                                    <label htmlFor= "last_name" className="modal-label" id="last-name-label">Last Name:</label>
                                    <div className= "errors" 
                                        id={this.props.editErrors.join(" ").includes("Last") ? "signup-errors": "non-visible"}>
                                        Last name is invalid 
                                    </div>
                                </div>
                            </div>
                            <div className="modal-input-container">
                                <input type="date"  
                                    id="birthday"
                                    required
                                    max= {today.toISOString().split('T')[0]}
                                    className= "modal-input"
                                    value={this.state.birth_date}
                                    onChange={this.handleUpdate('birth_date')}
                                />
                                <label htmlFor= "birthday" className="modal-label">Birthday</label>
                            </div> 
                            <div className="modal-input-container">
                            <input type="text"  
                                id="pronouns"
                                required
                                className= "modal-input"
                                value={this.state.gender}
                                onChange={this.handleUpdate('gender')}
                            />
                            <label htmlFor= "pronouns" className="modal-label">Pronouns</label>
                            </div> 
              
                        <div className="modal-input-container">
                            <input type="text"  
                                id="location"
                                required
                                className= "modal-input"
                                value={this.state.location}
                                onChange={this.handleUpdate('location')}
                            />
                            <label htmlFor= "location" className="modal-label">Location</label>
                        </div>   
                        <div className="modal-input-container">
                            <input type="text"  
                                id="bio"
                                required
                                className= "modal-input"
                                value={this.state.bio}
                                onChange={this.handleUpdate('bio')}
                            />
                            <label htmlFor= "bio" className="modal-label">Bio</label>
                        
                        </div>
                    
                    <button className="edit-submit-button" onClick = {this.handleSubmit}>Update Info</button>
                    </div>
                </form>
            </div>
        )
     }
  
}
export default EditForm