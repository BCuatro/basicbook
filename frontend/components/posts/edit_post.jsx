import React from 'react'
import {withRouter} from 'react-router-dom'

class EditPost extends React.Component {
    constructor(props){
        super(props)
        // this.state = this.props.post
        this.state = {
            id: this.props.post.id,
            body:this.props.post.body,
            photoFile: null,
            photoUrl: this.props.post.post_photoUrl,
        };
        
        this.handleSubmit =this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleFile = this.handleFile.bind(this)
        
    }
    handleUpdate(type) {
        return e => { 
            this.setState({[type]: e.currentTarget.value})
        }
    }
    componentDidMount(){
        // this.props.fetchPost(this.state.id)
        // this.props.fetchPosts()
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

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body)
        if(this.state.photoFile){

            formData.append('post[post_photo]', this.state.photoFile);
        }
        this.props.updatePost(this.state.id, formData).then(this.props.closeModal)
        
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.updatePost(this.state).then(this.props.closeModal)
    //   }

    render() {
        // if(!this.props.post) return null
        let buttonId
        // console.log(this.state.postPhoto)
        
        if(this.state.body.replace(/ /g,'').length ===0){
           buttonId ="invalidButton"
        } else {
            buttonId= "newButton"
        }
        const preview = this.state.photoUrl ? <img className = "post-photo-preview" src={this.state.photoUrl} /> : null;
            // console.log(this.props.phototype)
        
        return(
            // <div className='editform' >
            //     <h2> Hi </h2>

            //     <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
            // </div>
            <div className="edit-post-form">
                <form onSubmit={this.handleSubmit}>
                    <div className ="edit-post-header">
                            <h2 className= "edit-form-title">Edit Post</h2>
                            <div
                            onClick={()=>{
                                this.props.closeModal();
                            }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                    </div>
                    <div className="edit-post-container">
                        <textarea 
                        cols="30" rows="5" 
                        value = {this.state?.body}
                        onChange={this.handleUpdate("body")}
                        ></textarea>
                        <div className= "post-preview-container">
                            <h5>Preview</h5>
                                    {preview}
                                <br />
                                <input type="file" 
                                onChange={this.handleFile}
                                name="" id="" />
                        </div>
                        <button 
                        onClick = {this.handleSubmit} 
                        disabled={this.state.body.replace(/ /g,'').length ===0} 
                        className= "newPostButton" 
                        id= {buttonId}>Post</button>
                    </div>

                </form>

            </div>
        )
    }





}

export default withRouter(EditPost)

