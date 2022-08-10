import React from 'react';
import { withRouter } from 'react-router-dom';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",

            profile_id: this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1] === '' ?
                this.props.currentUser.id :
                this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1],

            author_id: this.props.currentUser.id,
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this)


    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }
    componentWillUnmount() {
        // this.props.removeErrors();
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
        formData.append('post[body]', this.state.body);
        formData.append('post[profile_id]', this.state.profile_id);
        formData.append('post[author_id]]', this.state.author_id);
        if(this.state.photoFile){

            formData.append('post[post_photo]', this.state.photoFile);
        }
        
        // const post = Object.assign({}, this.state);
        this.props.createPost(formData).then(this.props.closeModal);
    }



    render() {
        let buttonId;
        if (!this.props.currentUser) return null;

        if (this.state.body.replace(/ /g, '').length === 0) {
            buttonId = "invalidButton";
        } else {
            buttonId = "newButton";
        }

        const preview = this.state.photoUrl ? <img className = "post-photo-preview" src={this.state.photoUrl} /> : null;
            // console.log(this.props.phototype)




        return (


            <div className="post-container">
                <div className="post">
                    <form onSubmit={this.handleSubmit}>
                        <div className ="edit-post-header">
                            <h2 className= "edit-form-title">New Post</h2>
                            <div
                            onClick={()=>{
                                this.props.closeModal();
                            }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                        </div>
                        <div className="edit-post-container">
                            <textarea
                                cols="50" rows="5"
                                placeholder='What is on your mind?'
                                value={this.state.body}
                                onChange={this.handleInput("body")}
                            ></textarea>
                             <div className= "post-preview-container">
                                <h5>Preview</h5>
                                        {preview}
                                    <br />
                                    <input type="file" 
                                    onChange={this.handleFile}
                                    name="" id="" />
                            </div>
                            <input type="hidden"
                                value={this.state.author_id}
                                onChange={this.handleInput("author_id")}
                            />
                            <input type="hidden"
                                value={this.state.profile_id}
                                onChange={this.handleInput("profile_id")}
                            />
                            <br />
                            <button
                                onClick={this.handleSubmit}
                                disabled={this.state.body.replace(/ /g, '').length === 0}
                                className="newPostButton"
                                id={buttonId}>Post</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }





}

export default withRouter(NewPost);

