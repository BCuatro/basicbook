import React from 'react';
import ProfileNavBarContainer from './profile_nav_bar_container';
import EditProfileContainer from '../profile/edit_profile_container';
import Tabs from './tabs';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            photoFile: null
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleProfilePic = this.handleProfilePic.bind(this)
           
    }
    
  
    componentDidMount(){
        
       
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUsers()
        
    }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal()
    }
    handleFile(e) {
        this.setState({photoFile: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[profile_pic]', this.state.photoFile)
        
    }

    handleProfilePic(user){
        if (!user.profile_picUrl) {
            return <p>no photo</p>
        } else {
            return <img className="profilePic"src={user.profile_picUrl} />;
        }
    }

    // handleCoverPhoto(){
    //     let coverPhoto;
    //     if (!this.props.user.coverPhotoUrl) {
    //         coverPhoto = ""
    //     } else {
    //         coverPhoto = <img className="coverphoto" src={this.props.user.coverPhotoUrl} />;
    //     }

    //     return coverPhoto
    // }
 
   
    
    render(){ 
      
        let editButton
         const {user} = this.props
        if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
            editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
                editButton =""
            } 
            
    
        return (
            <div className="profile">
                <div>{editButton}</div>
                <div className="div1"><ProfileNavBarContainer />
                <div className="profilePic">
                     {this.handleProfilePic(user)}
                 </div>
                 <input type="file" 
                 onChange ={this.handleProfilePic.bind(this)}/>
                
                </div>
                {/* <EditProfileContainer /> */}
               
                
            </div>
        )
    }
}
export default Profile


