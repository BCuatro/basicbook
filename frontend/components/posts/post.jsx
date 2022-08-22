import React from 'react'
import PostIndexContainer from './post_index_container';
import aboutMe from '../profile/about_me';
import FriendIndex from '../friends/friend_index';


class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
           
    }
    componentDidMount() {
        this.props.fetchLikes();
        this.props.fetchComments();

      }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal();
    }
    

    render() {
        
        return(
            <div className = "post-tab-content">
                <div className="post-container"> 
                    
                    <div className= "post-tab-sidebar">
                        <div className= "aboutMe-container">
                            {aboutMe(this.props.user)}
                        </div>

                        <div>
                            <FriendIndex 
                            classname = {"friends-list-container"}
                            user = {this.props.user}
                            users = {this.props.users}
                            currentUser = {this.props.currentUser}
                            friends = {this.props.friends} />
                        </div>
                    

                    </div>
                    <div className= "post-item-container" >
                        <div className= "postButtonModalContainter">
                            
                            <button className="postButtonModal" onClick = {this.handleOpenModal}>What is on your mind?</button>
                        </div>
                        <PostIndexContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post