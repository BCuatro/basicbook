import React from 'react';


class EditForm extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this)
        // this.handleProfilePic =this.handleProfilePic.bind(this)
        
      }
    
      componentDidMount() {
        this.props.fetchUser(this.state.id)
      }


        // handleFile(e) {
        //     this.setState({photoFile: e.currentTarget.value});
        // }

    
      handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[first_name]', this.state.first_name)
        formData.append('user[last_name]', this.state.last_name)
        formData.append('user[location]', this.state.location)
        formData.append('user[bio]', this.state.bio)
        this.props.updateUser(this.state.id, formData).then(this.props.closeModal)
    //     const formData = new FormData();
    //     formData.append('user[profile_pic]', this.state.photoFile)
      }
    

    handleUpdate(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    // handleProfilePic(user){
    //     if (!user.profile_picUrl) {
    //         return <p>no photo</p>
    //     } else {
    //         return <img className="profilePic"src={user.profile_picUrl} />;
    //     }
    // }
   


   
    
    render(){ 
        const today = new Date(Date.now())
       

       
        // console.log(Date.now() - Date.now().getTimezoneOffset())
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
                                this.props.removeErrors();
                            }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                            {/* <button onClick={()=>{
                                    this.props.closeModal();
                                    this.props.removeErrors();
                                }} className="close-x"><i className="fa fa-lg fa-x"></i></button> */}
                    </div>
                    {/* <h3>Username: {this.state.username}</h3>
                    <h4>Email: {this.state.email}</h4> */}
                    {/* <div className="modal-input-container">
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
                        
                    </div> */}
                    <div className = "edit-form-content-container">
                        <div className = "full-name-container"> 
                                <div className="modal-input-container">
                                    <input type="text" 
                                        id="first_name"
                                        required
                                        // style={this.props.signupErrors.join(" ").includes("First") ? {borderColor: "red"} : {borderColor:""}}
                                        className="modal-input"
                                        value={this.state.first_name}
                                        onChange={this.handleUpdate('first_name')}
                                    />
                                    <label htmlFor= "first_name" className="modal-label" id= "first-name-label">First Name:</label>
                                    {/* <div className= "errors" 
                                        id={this.props.signupErrors.join(" ").includes("First") ? "signup-errors": "non-visible"}>
                                        First name is invalid 
                                    </div> */}
                                </div>
                                <div className="modal-input-container">
                                    <input type="text"  //take a look at your label
                                        id="last_name"
                                        required
                                        // style={this.props.signupErrors.join(" ").includes("Last")? {borderColor: "red"} : {borderColor:""}}
                                        className= "modal-input"
                                        value={this.state.last_name}
                                        onChange={this.handleUpdate('last_name')}
                                    />
                                    <label htmlFor= "last_name" className="modal-label" id="last-name-label">Last Name:</label>
                                    {/* <div className= "errors" 
                                        id={this.props.signupErrors.join(" ").includes("Last") ? "signup-errors": "non-visible"}>
                                        Last name is invalid 
                                    </div> */}
                                </div>
                            </div>
                            <div className="modal-input-container">
                                <input type="date"  //take a look at your label
                                    id="birthday"
                                    required
                                    max= {today.toISOString().split('T')[0]}
                                    className= "modal-input"
                                    value={this.state.birthday}
                                    onChange={this.handleUpdate('birthday')}
                                />
                                <label htmlFor= "birthday" className="modal-label">Birthday</label>
                            </div> 
                            <div className="modal-input-container">
                            <input type="text"  //take a look at your label
                                id="pronouns"
                                required
                                className= "modal-input"
                                value={this.state.pronouns}
                                onChange={this.handleUpdate('gender')}
                            />
                            <label htmlFor= "pronouns" className="modal-label">pronouns</label>
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
                        
                        </div>
                        
                        
                    {/* <div>
                        <input type="file" 
                        onChange ={this.handleProfilePic}/>
                    </div> */}
                    
                    <button className="edit-submit-button" onClick = {this.handleSubmit}>Update Info</button>
                    </div>
                </form>
            </div>
        )
     }
  
}
export default EditForm