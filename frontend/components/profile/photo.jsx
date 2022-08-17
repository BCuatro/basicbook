import React from 'react';
import ProfileNavBarContainer from './profile_nav_bar_container';
import EditProfileContainer from '../profile/edit_profile_container';
import Tabs from './tabs';


class Photo extends React.Component{
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
        // this.handleOpenModal = this.handleOpenModal.bind(this);
        // this.handleProfilePic = this.handleProfilePic.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleProfilePhotoSubmit = this.handleProfilePhotoSubmit.bind(this)
        this.handleCoverPhotoSubmit= this.handleCoverPhotoSubmit.bind(this)
           
    }
    
  
    componentDidMount(){
        
       
        // this.props.fetchUser(parseInt(this.props.match.params.userId))
        // this.props.fetchUsers()
        // this.props.fetchProfile(parseInt(this.props.match.params.userId))
    }

   
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

    handleProfilePhotoSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[profile_photo]', this.state.photoFile);
        this.props.updateUser(this.state.id, formData).then(this.props.closeModal)
        
    }

    handleCoverPhotoSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[cover_photo]', this.state.photoFile);
        this.props.updateUser(this.state.id, formData).then(this.props.closeModal)
        
    }
   
    
    render(){ 
       
        const preview = this.state.photoUrl ? <img className = "photo-preview" id = {this.props.phototype}src={this.state.photoUrl} /> : null;

        let photoForm
        let photoTitle
        if (this.props.phototype ==="profilephoto"){
            photoTitle = "Profile Picture"
            photoForm = 
            <div>
                    <h5>Preview</h5>
                    {preview}
                    <form onSubmit={this.handleProfilePhotoSubmit}>
                        <input type="file" 
                        onChange={this.handleFile}
                        name="" id="" />
                        <button onClick={this.handleProfilePhotoSubmit}>Upload Profile Photo</button>
                        

                    </form>
                    
                </div>
        } else if (this.props.phototype ==="coverphoto"){
            photoTitle = "Cover Photo"
            photoForm = 
            <div>
                    <h4>Preview:</h4>
                    {preview}
                <form onSubmit={this.handleCoverPhotoSubmit}>
                        <input type="file" 
                        onChange={this.handleFile}
                        name="" id="" />
                        <button onClick={this.handleCoverPhotoSubmit}>Upload Cover Photo</button>
                </form>
            </div>

        }

        return (
            <div className="new-photo_container">
               <div className ="edit-post-header">
                            <h2 className= "edit-form-title">{photoTitle}</h2>
                            <div
                            onClick={()=>{
                                this.props.closeModal();
                            }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                        </div>
                    
                <div>
                    {photoForm}
                </div>
                
            </div>
        )
    }
}
export default Photo


