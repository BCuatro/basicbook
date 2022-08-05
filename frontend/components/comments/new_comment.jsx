import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../actions/comments_actions';

class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            // url: this.props.location.pathname.split('/'),
            // profile_id: this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length-1],
            // author_id: this.props.currentUser.id
            post_id: this.props.post?.id,
            author_id: this.props.currentUser?.id,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);


    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    componentWillUnmount() {
        this.props.removeErrors();

    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state);
        this.props.createComment(comment).then(this.state.body = "");

    }

    render() {

        // const {post, currentUser, users, user, userId, errors}= this.props
        let buttonId;
        if (!this.props.currentUser) return null;

        if (this.state.body.replace(/ /g, '').length === 0) {
            buttonId = "invalidButton";
        } else {
            buttonId = "newButton";
        }


        return (


            <div className="newCommentform">
                {/* <div className= "comment">
                    <header className ="postHeader">Create Post</header> */}

                <form onSubmit={this.handleSubmit}>
                    {/* <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button> */}
                    <input type="hidden"
                        value={this.props.currentUser?.id}
                        onChange={this.handleInput("author_id")}
                    />
                    <input type="hidden"
                        value={this.props.post?.id}
                        onChange={this.handleInput("post_id")}
                    />
                    <div className= "new-comment-container-with-photo">
                        <div className= "comment-photo-container" >
                                <img  src={this.props.currentUser?.profile_photoUrl ? this.props.currentUser?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } className= "post-photo" id= "profile-picture" /> 
                        </div>
                        <div className="newCommentContainer">
                            
                            <textarea
                                className='commentInputField'
                                cols="50" rows="1"
                                placeholder='Write a comment...'
                                value={this.state?.body}
                                onChange={this.handleInput("body")}
                            ></textarea>
                            
                            <button
                                
                                className="newCButton"
                                id={buttonId}
                                disabled={this.state.body.replace(/ /g, '').length === 0}
                                onClick={this.handleSubmit}> Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(NewComment);

