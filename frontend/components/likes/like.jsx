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
        if (this.props.likeable_type === "Post"){
            this.props.fetchPost(this.props.likeable_id)
        } else if (this.props.likeable_type === "Comment"){
            this.props.fetchComment(this.props.likeable_id)
        }
    }

    handleInput() {

        
        this.setState({ user_id: this.props.currentUser_id });
        this.setState({ likeable_id: this.props.likeable_id });
        this.setState({ likeable_type: this.props.likeable_type });
    }

    handleLike() {
        // e.preventDefault()

        const formData = new FormData();

        formData.append('like[user_id]', this.state.user_id);
        formData.append('like[likeable_id]', this.state.likeable_id);
        formData.append('like[likeable_type]', this.state.likeable_type);
   
        this.props.createLike(formData);

    }

    handleUnlike(likeId) {
        this.props.deleteLike(likeId)

    }

    render() {

        let likeButton = 
        <div className= "like-container"> 
            <form className="like-form" onSubmit={this.handleLike}>
                <button onClick={() => {this.handleInput()}}>Like</button>
            </form>
        </div>
        

        this.props.likes.forEach(like => { 
            if(this.props.currentUser_id === like.user_id && like.likeable_type === "Post" && like.likeable_id === this.props.likeable_id){
                likeButton = 
                <div className="like-form">
                    <button 
                        className = "like-button"
                        id = "unlike"
                        onClick={() => {this.handleUnlike(like.id)}}>Liked</button>
                </div>
            }
            else if(this.props.currentUser_id === like.user_id && like.likeable_type === "Comment" && like.likeable_id === this.props.likeable_id){
                likeButton = 
                <div className="like-form"> 
                    <button 
                        className = "like-button"
                        id = "unlike"
                        onClick={() => {this.handleUnlike(like.id)}}>Liked</button>
                </div>
            }
            
        })

  
            
            
        //     if (like.likeable_type === this.props.currentUser_id && 
        //     like.likeable_id === this.props.likeable_id &&
        //     like.likeable_type === "Post")
        //     {
        //        likeButton = <button 
        //         className = "like-button"
        //         id = "unlike"
        //         onClick={() => {
        //             this.handleUnlike(like.id)
        //         }
        //         }>Liked</button>
        //     } else{
        //         return likeButton = 
        //         <form onSubmit={this.handleLike}>
                
        //         <button onClick={() => {
        //             this.handleInput()
        //         }
        //         }>Like</button>

        //     </form>
        //     }
        // // })


                
        return (
            <div className= "like-container">
                {likeButton}
                {/* <form onSubmit={this.handleLike}>
                
               <button onClick={() => {
                   this.handleInput()
                }
                }>Like</button>
                </form> */}
            </div>
        );
    }
}

export default withRouter(LikeButton);

