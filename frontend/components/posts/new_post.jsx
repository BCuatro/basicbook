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

            author_id: this.props.currentUser.id
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
        const post = Object.assign({}, this.state);
        this.props.createPost(post).then(this.props.closeModal);
    }

    render() {
        let buttonId;
        if (!this.props.currentUser) return null;

        if (this.state.body.replace(/ /g, '').length === 0) {
            buttonId = "invalidButton";
        } else {
            buttonId = "newButton";
        }




        return (


            <div className="postcontainer">
                <div className="post">
                    <header className="postHeader">Create Post</header>
                    <form onSubmit={this.handleSubmit}>
                        <button onClick={() => { this.props.closeModal(); }} className="close-x">X</button>

                        <textarea
                            cols="50" rows="10"
                            placeholder='What is on your mind?'
                            value={this.state.body}
                            onChange={this.handleInput("body")}
                        ></textarea>
                        <br />
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

                    </form>
                </div>

            </div>
        );
    }





}

export default withRouter(NewPost);

