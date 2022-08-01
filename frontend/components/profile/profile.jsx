import React from 'react';
import ProfileNavBarContainer from './profile_nav_bar_container';
import EditProfileContainer from '../profile/edit_profile_container';
import Tabs from './tabs';
import FriendItem from '../friends/friend_item';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props
        // this.state = {
        //     id: this.props.currentUser.id,
        //     email:this.props.currentUser.email,
        //     username: this.props.currentUser.username,
        //     first_name: this.props.currentUser.first_name,
        //     last_name: this.props.currentUser.last_name,
        //     location: this.props.currentUser.location,
        //     bio:this.props.currentUser.bio,
        //     photoFile: null,
        //     photoUrl: null
        // };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        
           
    }
    
  
    componentDidMount(){
       
        this.props.fetchUsers();
        this.props.fetchPosts();
        this.props.fetchFriends();

        // this.props.fetchUser(parseInt(this.props.match.params.userId))
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
    
    // handleFile(e) {
    //     const file = e.currentTarget.files[0]
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({photoFile: file, photoUrl: fileReader.result});
    //     }
    //     if (file){
            
    //         fileReader.readAsDataURL(file);
    //     }
    // }

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
        // console.log("Look at this", this.props.users[this.props.friends[0]?.friend_id]?.username)
       
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
                    <img className = "cover-photo" src={this.props.user.cover_photoUrl} alt="" />
                    <br />
                    <img className = "profile-photo" src={this.props.user.profile_photoUrl} alt="" /> 
                    <br />
                {/* <h3>Preview</h3>
                    {preview}
                    
                    <h4>Profile Header</h4>
                    Add Name, friend count, and profile picture
                    
                    <form onSubmit={this.handleCoverPhotoSubmit}>
                            <input type="file" 
                            onChange={this.handleFile}
                            name="" id="" />
                            <button onClick={this.handleCoverPhotoSubmit}>Upload Photo</button>
                    </form> */}

                    <button onClick = {() => {this.handleOpenModal("editphoto","profilephoto")}}>Edit Profile Picture</button> 
                    <button onClick = {() => {this.handleOpenModal("editphoto","coverphoto")}}>Edit Cover Picture</button>
                </div>
                
                <div className = "profile-sidebar-1">
                
                   <h5>Profile Sidebar 1</h5>
                    
                     {/* <form onSubmit={this.handleSubmit}>
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
                    <ul className= "wall_posts">
                        {
                            this.props?.friends
                            // .sort((a,b) => a.created_at > b.created_at ? -1 : 1)
                            .map(friend => (
                                // this.props.users[friend?.friend_id]?.username
                                <FriendItem
                                    key={`${friend.id}`}
                                    friend={friend}
                                    user= {this.props.user}
                                    currentUser= {this.props.currentUser}
                                    users= {(this.props.users)}
                                />
                            )
                            )
                        }
                    </ul>
                </div>
                
               
            
                
                
                
               
                
            </div>
        )
    }
}
export default Profile


