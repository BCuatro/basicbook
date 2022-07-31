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
            photoFile: null
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        // this.handleProfilePic = this.handleProfilePic.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
           
    }
    
  
    componentDidMount(){
        
       
        this.props.fetchUser(parseInt(this.props.match.params.userId))
        this.props.fetchUsers()
        this.props.fetchProfile(parseInt(this.props.match.params.userId))
    }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal()
    }
    handleFile(e) {
        debugger
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[profile_photo]', this.state.photoFile);
        this.props.updateUser(this.state.id, formData)
        
    }

   
    
    render(){ 
        let editButton
        if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
            editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
                editButton =""
            } 
            
        return (
            <div className="profile">
                <form onSubmit={this.handleSubmit}>
                    <input type="file" 
                    onChange={this.handleFile}
                    name="" id="" />
                    <button onClick={this.handleSubmit}>Upload Photo</button>

                </form>
                <div>{editButton}</div>
                <div><img src={this.props.user.profile_photoUrl} alt="" /></div>
                <div className="div1"><ProfileNavBarContainer />
                {/* <div className="profilePic">
                     {this.handleProfilePic(user)}
                 </div>
                 <input type="file" 
                 onChange ={this.handleProfilePic.bind(this)}/> */}
                
                </div>
                {/* <EditProfileContainer /> */}
               
                
            </div>
        )
    }
}
export default Profile


