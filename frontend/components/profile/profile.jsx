import React from 'react';
import ProfileNavBarContainer from './profile_nav_bar_container';
import EditProfileContainer from '../profile/edit_profile_container';
import Tabs from './tabs';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
           
    }
    
  
    componentDidMount(){
        
       
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUsers()
        
    }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal()
    }
 
   
    
    render(){ 
        console.log("Profile JSX")
        console.log(this.props.user)
        console.log(this.props.match.params.userId)
        console.log(this.props.currentUser)
        let editButton
         const {user} = this.props
        if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
            editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
                editButton =""
            } 
            
    
        return (
            <div>
                 {editButton}
                <ProfileNavBarContainer />
                {/* <EditProfileContainer /> */}
               
                
            </div>
        )
    }
}
export default Profile


