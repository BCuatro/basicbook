import React from 'react';
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            likeable_id: "",
            likeable_type: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);


    }

    // handleInput(type) {
    //     return e => {
    //         this.setState({ [type]: e.currentTarget.value });
    //     };
    // }
    componentDidMount(){
        this.props.fetchLikes()
    }

    handleInput() {

        
        this.setState({ user_id: this.props.currentUser_id });
        this.setState({ likeable_id: this.props.likeable_id });
        this.setState({ likeable_type: this.props.likeable_type });
    }

    handleLike(e) {
        e.preventDefault()

        const formData = new FormData();

        formData.append('like[user_id]', this.state.user_id);
        formData.append('like[likeable_id]', this.state.likeable_id);
        formData.append('like[likeable_type]', this.state.likeable_type);
   
        this.props.createLike(formData);

    }

    handleUnlike(e) {
        e.preventDefault();
        this.props.deleteLike(likeId)

    }

    render() {

        // const {post, currentUser, users, user, userId, errors}= this.props
        // let buttonId;
        // if (!this.props.currentUser) return null;

        // if (this.state.body.replace(/ /g, '').length === 0) {
        //     buttonId = "invalidButton";
        // } else {
        //     buttonId = "newButton";
        // }
        return (

            <div>
                <form onSubmit={this.handleLike}>
                            {/* <button onClick={() =>{
                            this.handleUpdate().then(
                            this.handleAddFriendSubmit())
                        }
                        }>Friend Request</button> */}
                            <button onClick={() => {
                                this.handleInput()
                            }
                            }>Like</button>

                        </form>

            </div>
           
        );
    }
}

export default withRouter(LikeButton);

