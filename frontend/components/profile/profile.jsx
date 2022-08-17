import React from 'react';
import ProfileNavBarContainer from './profile_nav_bar_container';
import EditProfileContainer from '../profile/edit_profile_container';
import Tabs from './tabs';
import FriendItem from '../friends/friend_item';
// import FriendRequestContainer from '../friends/friend_container';
import FriendRequestItem from '../friends/friend_request_item';
import FriendshipContainer from '../friends/friendship_container';
import NavBarExtension from '../nav_bar/nav_bar_extension';
import { Redirect } from 'react-router-dom';
import Friends from '../friends/friendshook';



class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.user
     
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this)
        
           
    }
    
  
    componentDidMount(){
       
        this.props.fetchUsers().then(
            (data) => this.handleRedirect(data.users)
        );
        this.props.fetchPosts();
        this.props.fetchFriends();
        // this.props.fetchLikes();
        this.props.fetchComments();
        
    }

    handleOpenModal(modal, phototype =""){
        // e.preventDefault();
        this.props.openModal(modal,phototype)
    }

    handleRedirect(users){
        if(!(this.props.userId in users)){
            this.props.history.push("/PageNotFound")
            // console.log(userId)
            // <Redirect to="/404NotFound" />
        }
    }
 
   
    
    render(){ 
        
        let editButton
        if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
            editButton = <button id = "edit-button" 
            onClick = {() => {this.handleOpenModal("editprofile")}}>
                <i className="fa fa-pencil"></i> Edit Profile
                </button> } else{
                editButton =""
            } 
       
        return (
            <div className="profile-header-background">
                <div className="profile-container">
                    <div><NavBarExtension users ={this.props.users}/></div>
                    
                    <div className= "profile-header">
                        <div className="profile-header-background"></div>
                        <div className= "profile-cover-container">
                            <img className = "cover-photo" src={this.props.user?.cover_photoUrl ?
                                this.props.user?.cover_photoUrl : "https://metabook-dev.s3.amazonaws.com/Lyn7SpQ5rZw6GDkrhAqTbn7q"  } alt="" />
                            <div className= {this.props.currentUser.id === parseInt(this.props.userId) ? "edit-cover-button-container" : "non-visible"}>
                            <div id= "edit-cover-content"  ><i onClick = {() => {this.handleOpenModal("editphoto","coverphoto")}} className="fa-solid fa-3x fa-camera-retro"></i></div>
                                {/* <button id= "edit-cover-button" onClick = {() => {this.handleOpenModal("editphoto","coverphoto")}}>Edit Cover Picture</button> */}
                            </div>
                            

                        </div>   
                        <br />
                        <div className= "profile-photo-container">
                            <div className="profile-banner">
                                <img className = "profile-photo" src={this.props.user?.profile_photoUrl ? this.props.user?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } alt="" /> 
                                <div className ={this.props.currentUser.id === parseInt(this.props.userId) ? "edit-photo-container" :"non-visible" } ><i onClick = {() => {this.handleOpenModal("editphoto","profilephoto")}} className="fa-solid fa-lg fa-camera-retro"></i></div>
                                <div className="user-information-container">
                                    <div className = "user-information">{this.props.user?.first_name} {this.props.user?.last_name} </div>
                                    <div className = "user-username">@{this.props.user?.username}</div>
                                    
                                </div>
                            </div>
                                <div className = "edit-profile-button-container">{editButton}</div>
                                {/* <div className = "edit-profile-button-container"> <FriendshipContainer /> </div> */}
                                <div className = "edit-profile-button-container"> <FriendshipContainer /> </div>
                        </div>
                    
                    </div>
                    <div className = "profile-body">
                        
                        
                        
                        <ProfileNavBarContainer />
                    

                    
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Profile


