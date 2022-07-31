import React from 'react';
import ProfileNavBarContainer from './profile_nav_bar_container';
import EditProfileContainer from '../profile/edit_profile_container';
import Tabs from './tabs';


class Profile extends React.Component{
    constructor(props){
        super(props)
        // this.state = this.props
        this.state = {
            id: this.props.currentUser.id,
            email:this.props.currentUser.email,
            username: this.props.currentUser.username,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            location: this.props.currentUser.location,
            bio:this.props.currentUser.bio,
            photoFile: null,
            photoUrl: null
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        // this.handleProfilePic = this.handleProfilePic.bind(this)
        // this.handleFile = this.handleFile.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleCoverPhotoSubmit= this.handleCoverPhotoSubmit.bind(this)
        // this.handleOpenProfilePhotoModal = this.handleOpenProfilePhotoModal.bind(this)
        // this.handleOpenCoverPhotoModal = this.handleOpenCoverPhotoModal.bind(this)
           
    }
    
  
    componentDidMount(){
        
       
        this.props.fetchUser(parseInt(this.props.match.params.userId))
        this.props.fetchUsers()
        this.props.fetchProfile(parseInt(this.props.match.params.userId))
    }

    handleOpenModal(modal, phototype =""){
        // e.preventDefault();
        this.props.openModal(modal,phototype)
    }

    // handleOpenCoverPhotoModal(){
    //     // e.preventDefault();
    //     this.props.openPhotoModal("editphoto","coverphoto")
    // }

    // handleOpenProfilePhotoModal(){
    //     this.props.openPhotoModal("editphoto","profilephoto")
    // }
    
    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        }
        if (file){
            
            fileReader.readAsDataURL(file);
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('user[profile_photo]', this.state.photoFile);
    //     this.props.updateUser(this.state.id, formData)
        
    // }

    // handleCoverPhotoSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('user[cover_photo]', this.state.photoFile);
    //     this.props.updateUser(this.state.id, formData)
        
    // }
   
    
    render(){ 
        let editButton
        if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
            editButton = <button onClick = {() => {this.handleOpenModal("editprofile")}}>Edit Profile</button> } else{
                editButton =""
            } 
        // const preview = this.state.photoUrl ? <img className = "profile-photo-preview" src={this.state.photoUrl} /> : null;
        //     console.log(this.state)
        return (
            <div className="profile-container">
                
                <div className= "profile-header">
                {/* <h3>Preview</h3>
                    {preview}
                    
                    <h4>Profile Header</h4>
                    Add Name, friend count, and profile picture
                    <img className = "cover-photo" src={this.props.user.cover_photoUrl} alt="" />
                    <form onSubmit={this.handleCoverPhotoSubmit}>
                            <input type="file" 
                            onChange={this.handleFile}
                            name="" id="" />
                            <button onClick={this.handleCoverPhotoSubmit}>Upload Photo</button>
                    </form> */}

                    <button onClick = {() => {this.handleOpenModal("editphoto","profilephoto")}}>Edit Profile Picture</button> 
                    <button onClick = {() => {this.handleOpenModal("editphoto","coverphoto")}}>Edit Profile Picture</button>
                </div>
                
                <div className = "profile-sidebar-1">
                {/* <img className = "profile-photo" src={this.props.user.profile_photoUrl} alt="" /> */}
                    {/* <h5>Profile Sidebar 1</h5>
                    
                    <form onSubmit={this.handleSubmit}>
                        <input type="file" 
                        onChange={this.handleFile}
                        name="" id="" />
                        <button onClick={this.handleSubmit}>Upload Photo</button>
                        

                    </form> */}
                    
                </div>
                <div className = "profile-main">
                    <h5>Proile Main</h5>
                    <div>{editButton}</div>
                    <ProfileNavBarContainer />
                    {/* Need to combine about me and post in one page*/}
                    
                </div>
                <div className="profile-sidebar-2">
                    <h5>Profile Sidebar 2</h5>
                </div>
                
               
            
                
                
                
               
                
            </div>
        )
    }
}
export default Profile


